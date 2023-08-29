import NavBarTop from "./NavBar/NavBarTop/NavBarTop";
import NavBar from "./NavBar/NavBar";
import OffCanvasMenu from "./OffCanvas/OffCanvasMenu";

export default function Header() {
    return (
        <header className="navbar-light navbar-sticky header-static">
            <OffCanvasMenu />
            <NavBarTop />
            <NavBar />
        </header>
    )
}