import { useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const {userRegister, loading} = useContext(AuthContext);
    console.log(loading);
    const handleRegisterForm = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        // const name = form.get("name");
        // const photoURL = form.get("photoUrl");
        const email = form.get("email");
        const pass = form.get("pass");
        // const terms = form.get("terms");
        userRegister(email, pass);
    };
    return (
        <div className="flex justify-center items-center h-[80vh] w-11/12 mx-auto">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-">
                <div className="card-body">
                    <form onSubmit={handleRegisterForm} className="fieldset">
                        {/* email field */}
                        <label className="label text-sm text-gray-700">Your Name</label>
                        <input name="name" type="text" className="input w-full" placeholder="Enter Your Name" required />
                        {/* email field */}
                        <label className="label text-sm text-gray-700">Photo URL</label>
                        <input name="photoUrl" type="text" className="input w-full" placeholder="Your photo URL" />
                        {/* email field */}
                        <label className="label text-sm text-gray-700">Email Address</label>
                        <input name="email" type="email" className="input w-full" placeholder="Email" required />
                        {/* password field */}
                        <label className="label text-sm text-gray-700">Password</label>
                        <input name="pass" type="password" className="input validator w-full" required placeholder="Password" minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                        <p className="validator-hint">
                            Must be more than 8 characters, including, At least one number, At least one lowercase letter, At least one uppercase letter
                        </p>
                        {/* accept terms and conditions */}
                        <div className="flex items-center space-x-2">
                            <input name="terms" type="checkbox" className="checkbox" required />
                            <p className="text-sm">Accept Terms & Conditions</p>
                        </div>
                        {/* submit button */}
                        {loading ? 
                        <span className="loading loading-spinner text-neutral mx-auto"></span>
                        :<button className="btn btn-neutral mt-4">Create Account</button>}
                    </form>
                    <p className="text-gray-600 text-center my-2">Already have an account ? <Link to="/auth/login" className="text-red-500 font-semibold hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;