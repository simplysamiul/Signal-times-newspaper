import facebookIcon from "../../assets/facebook-logo.svg";
import XIcon from "../../assets/logo.svg";
import instragramIcon from "../../assets/instagram-logo.svg"

const SocialAccount = () => {
    return (
        <div className="my-12">
            <h2 className="mb-3 text-xl font-bold">Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item justify-start py-6">
                    <img className="w-6" src={facebookIcon} alt="Facebook Icon" />
                    <p>Facebook</p>
                </button>
                <button className="btn join-item justify-start py-6">
                    <img className="w-6" src={XIcon} alt="X Icon" />
                    <p>X Twitter</p>
                </button>
                <button className="btn join-item justify-start py-6">
                     <img className="w-6" src={instragramIcon} alt="instragram Icon" />
                    <p>Instragram</p>
                </button>
            </div>
        </div>
    );
};

export default SocialAccount;