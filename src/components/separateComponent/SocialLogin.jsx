import { FaGithub, FaGoogle } from "react-icons/fa";
import googleIcon from "../../assets/google-logo.svg"


const SocialLogin = () => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Login With</h2>
            <div>
                <p className="flex items-center justify-center border-black btn space-x-2 text-[16px] mb-4">
                    <img className="w-5" src={googleIcon} alt="Google Logo" />
                    <span>Login With Google</span>
                </p>
                <p className="flex items-center justify-center border-1 border-black btn space-x-2 text-[16px]">
                    <FaGithub />
                    <span>Login With Github</span>
                </p>
            </div>
        </div>
    );
};

export default SocialLogin;