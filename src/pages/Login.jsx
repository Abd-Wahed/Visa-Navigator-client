import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

export default function Login() {
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                toast.success("Login Successful!");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                toast.success("Logged in with Google!");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

   return (
    <div className="hero min-h-[calc(100vh-280px)] bg-base-200 py-10 rounded-2xl my-6">
        <div className="hero-content flex-col w-full max-w-md">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Login to Your Account</h1>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    
                    {/* Email Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            className="input input-bordered w-full" 
                            required 
                        />
                    </div>
                    
                    {/* Password Field */}
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            className="input input-bordered w-full" 
                            required 
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* Login Button */}
                    <div className="form-control mt-4">
                        <button className="btn btn-primary w-full">Login</button>
                    </div>
                </form>
                
                <div className="divider px-8">OR</div>
                
                {/* Google Login Button */}
                <div className="px-8 pb-6">
                    <button onClick={handleGoogleLogin} className="btn btn-outline btn-neutral w-full gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.349-4.186c-2.791-2.615-6.417-4.203-10.729-4.203-8.839 0-16 7.161-16 16s7.161 16 16 16c9.224 0 15.354-6.49 15.354-15.63 0-.1.01-.714-.078-1.151z"></path>
                        </svg>
                        Sign in with Google
                    </button>
                </div>

                <p className="text-center mb-6 text-sm">
                    New to VisaNavigator? <Link to="/register" className="text-primary font-bold link link-hover">Register</Link>
                </p>
            </div>
        </div>
    </div>
);
}