import { Router } from "express"
import CartManager from '../manager/carts.manager.js'

const router = Router()
const cartManager=new CartManager()

router.get('/:cid', async (req, res) => {
    const cid = req.params.cid
    const result = await cartManager.getCartById(cid)
    res.send (result)
})

router.post('/:cid/product/:pid', async (req, res) => {
    const cid = parseInt(req.params.cid)
    const pid = parseInt(req.params.pid)
    const result = await cartManager.addProduct(cid, pid)
    res.send (result)
})

router.post('/', async (req, res) => {
    const result = await cartManager.create()
    res.send (result)
})

router.delete ('/:idc/:idp', async (req, res) => {
  const cid = parseInt(req.params.idc);
    const pid = parseInt(req.params.idp);
    const result = await cartManager.getCartById()
  res.send (result)
})






export default router