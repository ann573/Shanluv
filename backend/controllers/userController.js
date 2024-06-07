import User from "../models/User.js";


//update User
export const updateUser = async(req,res)=>
{

    const id =req.params.id
    try{

        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})
        res.status(200).json({
            success:true, 
            message:'thanh cong', 
            data:updatedUser
})
    } catch (err) {
        res.status(500).json({success:false, message:'update that bai'})
    }
}

export const deleteUser = async(req,res)=>
{
    const id = req.params.id
    try{
        await User.findByIdAndDelete(id) 
        res.status(200).json({
            success:true, 
            message:' delete thanh cong', 
    })
    } catch (err) {
        res.status(500).json({success:false, message:'delete that bai'})
    }
}
export const getUser = async(req,res)=>
{
    const id = req.params.id
    try{
        const user = await User.findById(id) 
        res.status(200).json({
            success:true, 
            message:' get thanh cong', 
            data: user,
    })
    } catch (err) {
        res.status(500).json({success:false, message:'get that bai'})
    }
}

export const getAllUser = async(req,res)=>
{
    try{
        const users = await User.find({});
        const count = users.length;
        res.status(200).json({
            count,
            success: true, 
            message:' get thanh cong', 
            data: users,
        })

    } catch (err) {
        res.status(500).json({success:false, message:'get that bai'})
    }
}