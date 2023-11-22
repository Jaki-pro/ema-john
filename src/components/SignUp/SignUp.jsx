import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleSignup=(event)=>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;

        setError('')
        console.log(email, password, confirmPass);
        if(password!=confirmPass) {setError('Password didnt match'); return;}
        if(password.length<6) {setError('Password should contain atleast 6 characters'); return;}
        createUser(email, password)
        .then(res=>{
            console.log(res.user);
            form.reset();
        })
        .catch(e=>{
            setError(e.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!</h1>
                    
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPass' placeholder="Confirm Password" className="input input-bordered" required />
                            {error&& <p className='text-red-600'><small>{error}</small></p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className='p-2'><small>Already have an account? Please <Link className='btn-link' to='/login'>Login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;