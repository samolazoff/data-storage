import {Router} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';

import  User  from '../models/User.js';

const router = new Router();


router.post('/login',
    
    async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email});

      if(!user){
        return res.json({message: "User not found"})
      };

      const isPassValid = await bcrypt.compare(password, user.password);

      if(!isPassValid){
        return res.json({message: "Invalid password"})
      };

      const token = jwt.sign({id: user.id}, config.get('secretKeyToken'), {expiresIn: '1h'});

      return res.json({
        token,
        user: {
            id: user.id,
            email: user.email,
            diskSpace: user.diskSpace,
            userSpace: user.userSpace,
            avatar: user.avatar
        }
      })

    } catch (error) {
        console.log(Error);
        res.send({message: 'Server error'})
    }
})

export default router;