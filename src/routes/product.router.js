import { Router } from "express"
import ProductManager from "../manager/product.manager.js"

const router = Router()
const productManager=new ProductManager()

router.get('/', async (req, res) => {
    const result = await productManager.list()
    res.send (result)
})

router.post('/', async (req, res) => {
    const data =req.body
    const result = await productManager.create(data)
    res.send (result)
})

router.put ('/:pid', async (req, res) => {
    const id = req.params.pid; 
    const data =req.body
    if (!data.id) {
        const result = await productManager.update(data, id)
        res.send (result)
    }else {
        return res.send ("No existe")
    }
})
  
router.delete ('/:pid', async (req, res) => {
    const id = parseInt(req.params.pid); 
    const result = await productManager.delete(id)
    if (result) {
        res.send (result)
    } else {
        console.log (result)
        res.send ("Error 404 - No existe")
    }    
})

export default router