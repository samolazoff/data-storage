import {Shema, model} from 'mongoose';

const User = new Shema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    diskSpace: {type: Number, required: true, default: 1024**3*10},
    usedSpace: {type: Number, required: true, default: 0},
    avatar: {type: String},
    files: [{type: ObjectId, ref: 'File'}]
});

module.exports = model('User', User);