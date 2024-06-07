import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import productRoute from './routes/product.js'
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'

// de su sung process.env.MONGO_URI
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOption = {
    origin:true,
    credentials:true
}
// ket noi database
mongoose.set('strictQuery',false);
const connect = async()=>{
    try
    {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        console.log('MongoDB database connected')

    } catch(err)
    {
        console.log('MongoDB database connected false')
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/user', userRoute)


app.listen(port, () => {
    connect();
    console.log('server listening on port', port);
});
