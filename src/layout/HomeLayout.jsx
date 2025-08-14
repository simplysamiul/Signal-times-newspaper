import { useEffect, useState } from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layoutComponent/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/layoutComponent/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    const [newsCategory, setNewsCategory] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => { data.status && setNewsCategory(data.data?.news_category) })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="font-poppins">
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>
                <div className=" w-11/12 mx-auto">
                    <nav className="sticky top-0">
                        <Navbar newsCategory={newsCategory} />
                    </nav>
                </div>
            </header>
            <main className="w-11/12 mx-auto py-4 lg:grid lg:grid-cols-12 gap-4">
                <aside className="col-span-2 hidden lg:block"><LeftNavbar newsCategory={newsCategory} /></aside>
                <section className="col-span-7"><Outlet /></section>
                <aside className="col-span-3"><RightNavbar /></aside>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;