import Link from "next/link";

export default function SocialAccounts() {
    // TODO add social accounts link
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-facebook-square"></i></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-twitter-square"></i></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-linkedin"></i></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-youtube-square"></i></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link ps-2 pe-0 fs-5" href="#"><i className="fab fa-vimeo"></i></Link>
            </li>
        </ul>
    )
}
