import {Router} from 'express';
import bcrypt from 'bcryptjs';
import {check, validationResult} from 'express-validator';

import  User  from '../models/User.js';

const router = new Router();


router.post('/registration',
    [
        check('email','Uncorrect email').isEmail(),
        check('password','Password must be longer than 3 and shoter than  8').isLength({min:3, max:8})
    ],
    async (req, res) => {
    try {
        const errorValidation = validationResult(req);
        
        if(errorValidation.isEmpty()){
            return  res.status(400).json({message: "Uncorrect request", errors})
        };

        const {email, password} = req.body;
        const candidate = await User.findOne({email});
        if(candidate) {
            return res.status(400).json({message: "User with this email already exist"})
        }
        const hashPassword = await bcrypt.hash(password, 15);
        const user = new User({email, password: hashPassword});
        await user.save();
        return res.json({message: "User was created"})

    } catch (error) {
        console.log(Error);
        res.send({message: 'Server error'})
    }
})

export default router;