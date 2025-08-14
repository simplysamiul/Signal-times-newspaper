import { Link } from "react-router-dom";
import SocialLogin from "../components/separateComponent/SocialLogin";


const Login = () => {
    return (
        <div className="flex justify-center items-center h-[80vh] w-11/12 mx-auto">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-">
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* email field */}
                        <label className="label text-sm text-gray-700">Email Address</label>
                        <input type="email" className="input w-full" placeholder="Email" />
                        {/* password field */}
                        <label className="label text-sm text-gray-700">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" />
                        {/* passsword forgate */}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {/* submit button */}
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className="text-gray-600 text-center my-2">Don't have any account ? <Link to="/auth/register" className="text-red-500 font-semibold hover:underline">Create Account</Link></p>
                </div>
                {/* login with google */}
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;