import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data} = useLoaderData();
    return (
        <div className="mx-4">
            <div>
                {
                   data.map(news => <NewsCard news={news} key={news._id} />) 
                }
            </div>
        </div>
    );
};

export default CategoryNews;