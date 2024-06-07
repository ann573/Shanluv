import Product from "../models/Product.js";


// create new product
export const createProduct = async (req,res)=>
{
   
    const newProduct = new Product(req.body)
    try 
    {
        const savedProduct = await newProduct.save()
        
        res.status(200).json({
            success:true, 
            message:'thanh cong', 
            data:savedProduct})
    }
    catch (err) 
    {
        res.status(500).json({
            success:false, 
            message:'That bai'})
    }
};

//update product
export const updateProduct = async(req,res)=>
{

    const id =req.params.id
    try{

        const updatedProduct = await Product.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})
        res.status(200).json({success:true, message:'thanh cong', 
    data:updatedProduct})
    } catch (err) {
        res.status(500).json({success:false, message:'update that bai'})
    }
}

export const deleteProduct = async(req,res)=>
{
    const id = req.params.id
    try{
        await Product.findByIdAndDelete(id) 
        res.status(200).json({
            success:true, 
            message:' delete thanh cong', 
    })
    } catch (err) {
        res.status(500).json({success:false, message:'delete that bai'})
    }
}
export const getProduct = async(req,res)=>
{
    const id = req.params.id
    try{
        const product = await Product.findById(id) 
        res.status(200).json({
            success:true, 
            message:' get thanh cong', 
            data: product,
    })
    } catch (err) {
        res.status(500).json({success:false, message:'get that bai'})
    }
}

export const getAllProduct = async(req,res)=>
{

    
    try{

        const products = await Product.find();

        res.status(200).json({
            success:true, 
            count: products.length,
            message:' get thanh cong', 
            data: products,
        })

    } catch (err) {
        res.status(500).json({
            success:false, 
            message:'get that bai'})
    }
}


