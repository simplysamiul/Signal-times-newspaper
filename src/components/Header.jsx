import moment from "moment";
import logo from "../assets/news-logo-removebg-preview.png"
import { Link } from "react-router-dom";
const Header = () => {
    const time = moment().format("dddd, MMMM Do YYYY");
    return (
        <div className="flex flex-col justify-center items-center py-4">
            <div>
                <Link to="/"><img className="w-[280px] md:w-[330px] lg:w-[360px]" src={logo} alt="Signal Times Logo" /></Link>
            </div>
            <p className="text-gray-400 font-semibold my-2">Journalism Without Fear or Favour</p>
            <p className="text-gray-400 font-semibold my-2">{time}</p>
            
            
        </div>
    );
};

export default Header;