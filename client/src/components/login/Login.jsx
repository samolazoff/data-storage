import React from 'react';

import Input from '../utils/input/Input';

const Login = () => {
    return (
        <section className='box-auth f-c'>
            <h2 className='title-block'>Login</h2>
            <form action="/login" method="post" className='f-c'>
                <Input type='email' placeholder='What is your email?' name='userEmail' id='inputForEmail' nameLabel='Email:'></Input>
                <Input type='passwor' placeholder='Enter your password' name='userPassword' id='inputForPassword' nameLabel='Password:'></Input>
                <button className='btn-form'>Send</button>
            </form>
        </section>
    );
};

export default Login;