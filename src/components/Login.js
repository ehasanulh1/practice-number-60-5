import React from 'react';

const Login = () => {
    return (
        <div >
            <input type="email" placeholder="Your Email" name='email' className="input input-bordered input-primary w-full max-w-xs" />  <br />
            <input type="password" placeholder="Password" name='password' className="input input-bordered input-primary w-full max-w-xs" />
            <br />
            <button className="btn btn-info">Submit</button>
        </div>
    );
};

export default Login;