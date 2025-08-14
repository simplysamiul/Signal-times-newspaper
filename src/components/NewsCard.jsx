import moment from "moment";
import { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    // expand text state
    const [isExpand, setIsExpand] = useState(false);
    const { author, category_id, details, image_url, rating, thumbnail_url, title, total_view, _id } = news;
    const publishDate = moment(author.published_date).format("MMMM Do YYYY");

    return (
        <div className="mb-8 border-1 border-gray-300 p-4 rounded-md">
            <div>
                {/* news author */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="w-[30px] rounded-full mr-2" src={author.img} alt={author.name} />
                        <div>
                            <h3 className="font-semibold">{author.name}</h3>
                            <span className="text-sm text-gray-500">{publishDate}</span>
                        </div>
                    </div>
                    <div className="flex text-2xl space-x-2 text-gray-500">
                        <CiBookmark className="hover:cursor-pointer" />
                        <CiShare2 className="hover:cursor-pointer" />
                    </div>
                </div>

                {/* news title */}
                <h2 className="text-2xl font-bold mt-6">{title}</h2>
                <img className="w-full my-4" src={image_url} alt={title} />
                {/* news details */}
                <p className="text-gray-500 mb-6"> {isExpand ? details : details.slice(0, 360)} ...
                    {!isExpand ? <button onClick={() => setIsExpand(true)} className="font-semibold text-[#ff6900] cursor-pointer">Read More</button>
                        : <button onClick={() => setIsExpand(false)} className="font-semibold text-[#ff6900] cursor-pointer">Read Less</button>}
                </p>
                {/* card footer */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex items-center gap-1 text-orange-500">
                            {[...Array(Math.max(0, Math.floor(rating?.number || 0)))].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                            <span className="text-gray-500 font-semibold ml-1">{rating?.number || 0}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-gray-500 space-x-2">
                        <FaEye />
                        <p className="text-sm font-semibold">{total_view > 0 ? total_view : 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;




