import {Link, Outlet} from "react-router-dom";
import './layout.css';
import '../../App.css';

const Layout = () => (
        <div className="app">
            <header>
                <div className="logo" alt="logo"></div>
            </header>
            <nav>
                <Link exact="true" to="/" >Home</Link>
                <Link exact="true" to="/menu">Menu</Link>
                <Link exact="true" to="/booking">Booking</Link>
                <Link exact="true" to="/about">About</Link>
            </nav>
            <Outlet />
            <footer>
                <div className="logo" alt="logo"></div>
                <div className="info">
                    <p>&copy; 2024 Little Lemon. All rights reserved.</p>
                </div>
            </footer>
        </div>
);

export default Layout;
