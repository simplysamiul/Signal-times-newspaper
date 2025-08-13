import { NavLink } from 'react-router-dom';

const NewsCategory = ({newsCategory}) => {
    return (
        <>
            {
                newsCategory.map((category) => <NavLink to={`/category/${category.category_id}`} className="btn text-gray-500 border-0" key={category.category_id}>
                    {category.category_name}
                </NavLink>)
            }
        </>
    );
};

export default NewsCategory;