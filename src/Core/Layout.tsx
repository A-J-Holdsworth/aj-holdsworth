import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import './Layout.scss';

const Layout = (props: any) => {

    return (
        <div>
            <Header />
            <div className="page">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;