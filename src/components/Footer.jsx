import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-20">
            <nav className="grid grid-flow-col gap-4">
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/visas" className="link link-hover">All Visas</Link>
                <Link to="/contact" className="link link-hover">Contact</Link>
            </nav> 
            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a className="hover:text-primary transition-colors" href="#"><i className="fab fa-facebook"></i></a>
                    <a className="hover:text-primary transition-colors" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="hover:text-primary transition-colors" href="#"><i className="fab fa-github"></i></a>
                </div>
            </nav> 
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by VisaNavigator Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;