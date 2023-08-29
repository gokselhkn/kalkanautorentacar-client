import Link from "next/link";
import ThemeChangerButton from "./ThemeChangerButton";
import FontSizeChanger from "./FontSizeChanger";
import SocialAccounts from "./SocialAccounts";

export default function NavBarTop() {
    return (
        <div className="navbar-top d-none d-lg-block small">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center my-2">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link ps-0" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">Login / Join</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <FontSizeChanger />

                        <ThemeChangerButton />

                        <SocialAccounts />
                    </div>
                </div>
                <div className="border-bottom border-2 border-primary opacity-1"></div>
            </div>
        </div>)
}








