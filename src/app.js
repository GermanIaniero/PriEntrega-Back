import express from 'express'
import productRouter from "./routes/product.router.js"

const app = express()
app.use('/api/products', productRouter)

app.listen(8080)