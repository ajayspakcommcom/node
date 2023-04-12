import { Link } from "react-router-dom";
import Logo from '../../content/images/logo.png';
import Links from "../Utilities/Links";
//import HeaderData from '../../content/data/header.json';

const Header = (props) => {

    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand"><img src={Logo} /></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <Links />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;