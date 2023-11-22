import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { getShoppingCart } from '../../utilities/fakedb';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    //console.log(location);
    const from = location.state?.from?.pathname || '/shop';
    const handleSignIn=(event)=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value; 

        setError('')
        console.log(email, password); 
        signIn(email, password)
        .then(res=>{
            const loggedUser = res.user;
            console.log(loggedUser);
            form.reset(); 
            navigate(from, {replace:true})
            
        })
        .catch(e=>{
            setError('Incorrect email/password');
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1> 
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {error&& <p className='text-red-600'><small>{error}</small></p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='p-2'><small>New to ema-john? Please <Link className='btn-link' to='/signup'>Sign Up</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;