import React, { useContext, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Register() {
    const {createUser}=useContext(AuthContext);
    const navigate = useNavigate();
    const [error,setError]=useState("");

    const handleRegister=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            toast.error("Password too short!");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            toast.error("Uppercase letter missing!");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            toast.error("Lowercase letter missing!");
            return;
        }

        setError("");


        createUser(email,password)
        .then((result)=>{
            toast.success("Registration Successful!");
        })
        .catch((err)=>{
            setError(err.message);
            toast.error(err.message);
        })


    }

  return (
    <div className="hero min-h-[calc(100vh-280px)] bg-base-200 py-10 rounded-2xl my-6">
            <div className="hero-content flex-col w-full max-w-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Register Now!</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Photo URL</span></label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            {error && <p className="text-error text-xs mt-2">{error}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Register</button>
                        </div>
                    </form>
                    <p className="text-center mb-6 text-sm">
                        Already have an account? <Link to="/login" className="text-primary font-bold link link-hover">Login</Link>
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Register