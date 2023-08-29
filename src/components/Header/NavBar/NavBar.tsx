import Link from "next/link";
import ThemeChangerButton from "./NavBarTop/ThemeChangerButton";
import SocialAccounts from "./NavBarTop/SocialAccounts";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand align-items-center" href="index.html">
                    <img className="navbar-brand-item light-mode-item" src="assets/images/logo-kalkan.svg" alt="logo" />
                    <img className="navbar-brand-item dark-mode-item" src="assets/images/logo-kalkan.svg" alt="logo" />
                    <h6 className="navbar-brand-item">Rent A Car</h6>
                </a>

                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-body h6 d-none d-sm-inline-block">Menu</span>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-nav-scroll mx-auto">

                        <li className="nav-item">
                            <Link className="nav-link active" href="/">Ana Sayfa</Link>
                        </li>

                        <li className="nav-item"> <Link className="nav-link" href="/editorial">Bizi Arayın</Link></li>
                    </ul>
                </div>

                <div className="nav flex-nowrap align-items-center">
                    <div className="nav-item d-none d-md-block">
                        <ThemeChangerButton />
                    </div>
                    <div className="nav-item d-none d-md-block">
                        <SocialAccounts />
                    </div>
                </div>
            </div>
        </nav>
    )
}