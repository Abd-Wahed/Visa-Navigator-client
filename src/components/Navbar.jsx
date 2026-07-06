import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/visas">All Visas</NavLink></li>
            {/* if user is logged in */}
            {user && (
                <>
                    <li><NavLink to="/add-visa">Add Visa</NavLink></li>
                    <li><NavLink to="/my-added-visas">My Added Visas</NavLink></li>
                    <li><NavLink to="/my-visa-applications">My Visa Applications</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
            <div className="navbar-start">
               {/* mobile dropdown menu */}
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                {/* website logo */}
                <Link to="/" className="text-xl font-bold tracking-wider text-primary">VisaNavigator</Link>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-4">
                {/* conditional rendering */}
                {user ? (
                    <div className="flex items-center gap-3">
                        {/* Tooltip */}
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User Name"}>
                            <img 
                                className="w-10 h-10 rounded-full border-2 border-primary object-cover" 
                                src={user?.photoURL || "https://i.ibb.co/default-avatar.png"} 
                                alt="Profile" 
                            />
                        </div>
                        <button onClick={logoutUser} className="btn btn-sm btn-outline btn-error">Logout</button>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
                        <Link to="/register" className="btn btn-sm btn-outline btn-primary hidden sm:inline-flex">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;