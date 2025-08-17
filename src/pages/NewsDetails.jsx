import { useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import RightNavbar from '../components/layoutComponent/RightNavbar';
import Details from '../components/Details';
// import { useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const {data}= useLoaderData();
    const detailsData = data[0];
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-8'>
                <section className='col-span-9'>
                    <Details detailsData={detailsData} />
                </section>
                <aside className='col-span-3'>
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;