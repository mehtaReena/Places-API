const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app =express();
app.use(morgan('dev'));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

const placeRouter = require('./routes/place')

app.use('/places', placeRouter)


mongoose.connect('mongodb://127.0.0.1:27017/PlacesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}
).then(() => {
   console.log(" DataBase connected...")
});

const PORT=3300;
app.listen(PORT,()=>{
    console.log(`Server is  listing  at http://localhost: ${PORT}`)
})