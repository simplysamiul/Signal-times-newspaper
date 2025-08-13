import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center">
            <p className="bg-[#D72050] font-semibold text-white p-3 text-xl rounded-bl-xl rounded-tl-xl">Latest</p>
            <div className="w-full">
               <Marquee pauseOnHover={true} speed={100} className=" space-x-15 bg-gray-200 p-3.5">
                    <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, minus.</Link>
                    <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, minus.</Link>
                    <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, minus.</Link>
                    <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, minus.</Link>
               </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;