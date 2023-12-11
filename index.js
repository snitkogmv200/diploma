const express = require('express')
const userRouter = require('./routes/user_routes')
const productRouter = require('./routes/product_routes')
const orderRouter = require('./routes/order_routes')

const PORT = process.env.PORT || 8081

const app = express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', productRouter)
app.use('/api', orderRouter)

app.listen(PORT, () => console.log(`server started on port: ${PORT}`))