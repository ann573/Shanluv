
import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register = async(req,res)=>
{
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            password: hash,
        });
        
        await newUser.save()

        res.status(200).json({
            succcess:true, 
            data:newUser,
            message:'Tao thanh cong'})

    } catch (error) {
        res.status(500).json({succcess:false, message:error})
        console.log(error)
    }
}

export const login = async(req,res)=>
{
    const username = req.body.username
    try {
            const user = await User.findOne({username})
        if (!user)
        {
            return res.status(404).json({
                succcess: false,
                message: 'Sai tên đăng nhập hoặc mật khẩu',
            })
        }
        const  checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)
        if (!checkCorrectPassword)
        {
            return res.status(401).json({
                succcess: false,
                message: 'sai mat khau hoac ten dang nhap'
            })
        }
        const {password, role, ...rest} = user._doc
        const token = jwt.sign({
            id: user._id,
            role:user.role
        }, process.env.JWT_SECRET_KEY, {expiresIn: "15d"})
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires:token.expiresIn
        }).status(200).json({
            token,
            data: {...rest},
            role,
        })
    } catch (error) {
        res.status(500).json({
            succcess: false,
            message: 'dang nhap that bai'
        })
    }
}
