import { Link, NavLink } from "react-router-dom";
import profileImg from '../assets/user.png';
import NewsCategory from "./shared/NewsCategory";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = ({ newsCategory }) => {
    const {user} = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-xl text-gray-500">
                        <NewsCategory newsCategory={newsCategory} />
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-500">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/">Career</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-3">
                <div>
                    <img className="w-8" src={profileImg} alt="User Profile Img" />
                </div>
                {!user && <Link to="/auth/login"><button className="btn bg-gray-700 text-white">Login</button></Link>}
                {user && <button className="btn bg-gray-700 text-white">Log Out</button>}
            </div>
        </div>
    );
};

export default Navbar;