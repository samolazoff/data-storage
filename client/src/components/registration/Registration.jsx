import React from 'react';

import Input from '../utils/input/Input';

const Registration = () => {
    return (
        <section className='box-auth f-c'>
            <h2 className='title-block'>Registration</h2>
            <form action="/registration" method="post" className='f-c'>
                <Input type='text' placeholder='What is your name?' name='userName' id='inputForName' nameLabel='Name:'></Input>
                <Input type='email' placeholder='What is your email?' name='userEmail' id='inputForEmail' nameLabel='Email:'></Input>
                <Input type='tel' placeholder='What is your phone number?' name='userPhone' id='inputForPhone' nameLabel='Phone:'></Input>
                <Input type='passwor' placeholder='Enter your password' name='userPassword' id='inputForPassword' nameLabel='Password:'></Input>
                <button className='btn-form'>Send</button>
            </form>
        </section>
    );
};

export default Registration;