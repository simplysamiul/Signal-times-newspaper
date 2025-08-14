import { FaGithub, FaGoogle } from "react-icons/fa";
import googleIcon from "../../assets/google-logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SocialLogin = () => {
    const {signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Login With</h2>
            <div>
                <p
                onClick={signInWithGoogle} 
                className="flex items-center justify-center border-gray-400 btn space-x-2 text-[16px] mb-4">
                    <img className="w-5" src={googleIcon} alt="Google Logo" />
                    <span className="text-gray-700">Login With Google</span>
                </p>
                <p 
                onClick={signInWithGithub}
                className="flex items-center justify-center border-1 border-gray-400 btn space-x-2 text-[16px]">
                    <FaGithub />
                    <span className="text-gray-700">Login With Github</span>
                </p>
            </div>
        </div>
    );
};

export default SocialLogin;