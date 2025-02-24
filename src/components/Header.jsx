import { Link } from "react-router";

export default function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <a className="navbar-brand">
                        <img src="src/assets/kleiderengel-logo.png" height="50px" alt="Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link className="nav-link" to="/"><li>Home</li></Link>
                            <Link className="nav-link" to="/contact"><li>Kontakt</li></Link>
                            <Link className="nav-link" to="/form"><li>Formular</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}