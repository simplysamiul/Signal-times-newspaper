import SocialAccount from "../separateComponent/SocialAccount";
import SocialLogin from "../separateComponent/SocialLogin";

const RightNavbar = () => {
    return (
        <div>
            <SocialLogin />
            <SocialAccount />
        </div>
    );
};

export default RightNavbar;