import express from 'express';
import cookieParser from'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors'

// Initialize the application
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// generic Middlewares
app.use(express.json({limit: "4kb"}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/', (req, res) =>{
    res.json({ message: 'Welcome to HomeSphere!' });
});




// Connecting the MongoDB through Mongoose
mongoose.connect(`mongodb://localhost:27017/home-sphere`)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log('http://localhost:'+PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
