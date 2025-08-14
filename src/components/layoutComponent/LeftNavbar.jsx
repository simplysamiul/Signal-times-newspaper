import NewsCategory from "../shared/NewsCategory";

const LeftNavbar = ({newsCategory}) => {
    
    return (
        <div>
            <h1 className="mb-4">All Category</h1>
            {/* news category list */}
            <div className="flex md:flex-col items-start gap-2">
                <NewsCategory newsCategory={newsCategory} />
            </div>
        </div>
    );
};

export default LeftNavbar;