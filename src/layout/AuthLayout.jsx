
import { Outlet } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar';

const AuthLayout = () => {
    return (
        <div className='font-poppins'>
            <AuthNavbar />
            <Outlet />
        </div>
    );
};

export default AuthLayout;