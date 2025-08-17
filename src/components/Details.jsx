import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Details = ({ detailsData }) => {
    const { image_url, details, title, category_id } = detailsData;
    return (
        <div className="mb-6">
            <img className="w-full my-4" src={image_url} alt={title} />
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-gray-500 mb-10">{details}</p>
            <Link to={`/category/${category_id}`}>
                <button className="btn bg-red-500 text-white font-semibold text-xl"><FaArrowLeftLong /> All news in this category</button>
            </Link>
        </div>
    );
};

export default Details;