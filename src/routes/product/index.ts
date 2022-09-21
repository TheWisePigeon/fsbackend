import { Router } from "express"
import productService from "../../services/product"

const router = Router()

router.route("/create").post(productService.createProduct)

router.route("/get").get(productService.getProducts)

router.route("/update/:id").post(productService.updateProduct)

router.route("/delete/:id").post(productService.deleteProduct)

export default router