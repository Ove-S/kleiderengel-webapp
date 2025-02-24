import { Link } from "react-router";

export default function Footer() {
    return(
        <footer>    
            <nav className="navbar">
                <div className="container justify-content-center">
                    <ul className="navbar-nav flex-row"> 
                        <Link className="nav-link mx-2" to="/privacy"><li>Datenschutz</li></Link>
                        <Link className="nav-link mx-2" to="/imprint"><li>Impressum</li></Link>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}