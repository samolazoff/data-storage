import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import bodyParser from 'body-parser';

import authRoute from './routes/auth.js';

const PORT = config.get('serverPort');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/auth', authRoute);


const start = () => {
    try {
        mongoose.connect(config.get('dbUrl'));
        app.listen(PORT, () => {
            console.log('Server is running ', PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

start();