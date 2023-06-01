import express from 'express';
import mongoose from 'mongoose';
import config from 'config';

const PORT = config.get('serverPort');

const app = express();

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