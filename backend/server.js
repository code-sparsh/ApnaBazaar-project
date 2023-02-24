const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const listingRouter = require('./routes/listingRoutes')
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(cors())
app.use(express.json())

app.use('/public', express.static('public'))

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})

app.use("/api/user", userRouter)
app.use("/api/listings", listingRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Listening to port ${process.env.PORT}`)
    })
})
.catch((error)=> {
    console.log(error);

})
