//import
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')

//routes
const userRoutes = require('./routes/user.js')
const authRoutes = require('./routes/auth.js')
const homeRoutes = require('./routes/home.js')
const orderRoutes = require('./routes/order.js')
const productRoutes = require('./routes/product.js')

//mongoDB connection
const PORT = process.env.PORT || 8989
const uri = process.env.MONGODB_URI
mongoose.connect(uri, {
    writeConcern: { w: 'majority' }, // Set the correct write concern
}).then(() => {
    console.log('MongoDB connected')
}).catch((error) => console.log(error.message, 'did not connect'))


mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected')
})

//middlewares
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('morgan'))

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/products', productRoutes)


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))