import { Request, Response } from "express"
import Product from "../../models/product";

const createProduct = async (req: Request, res: Response)=> {
    const { name, price, image, description } = req.body
    const newProduct = new Product({
        name, price, image, description
    })
    newProduct.save((err, result)=>{
        if(err){
            return res.status(500).send("Something went wrong")
        }
        return res.status(200).send({
            data: result
        })
    })
}

const getProducts = async (req: Request, res: Response)=> {
    const products = await Product.find()
    return res.status(200).send({
        data: products
    })
}


const updateProduct = async (req: Request, res: Response)=> {
    const { id, name, price, image, description } = req.body
    await Product.findByIdAndUpdate(id, { name, price, image, description })
    const updatedProduct = await Product.findById(id)
    return res.status(200).send({
        data: updatedProduct
    })
}

const deleteProduct = async (req: Request, res: Response)=> {
    const { id } = req.body
    const deletedProduct = await Product.findByIdAndDelete(id)
    return res.status(200).send({
        data: deletedProduct
    })
}

const productService = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}

export default productService