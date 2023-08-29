import Link from "next/link";

export default function OffCanvasMenu() {
    return (
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasMenu">
            <div className="offcanvas-header justify-content-end">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column pt-0">
                <div>
                    <img className="light-mode-item my-3" src="assets/images/logo.svg" alt="logo" />
                    <img className="dark-mode-item my-3" src="assets/images/logo-light.svg" alt="logo" />
                    <p>Exploring, sharing, and discovering at buneydi: Elevating stories, empowering insights! </p>
                    <ul className="nav d-block flex-column my-4">
                        <li className="nav-item h5">
                            <Link className="nav-link" href="/">Home</Link></li>
                        <li className="nav-item h5">
                            <Link className="nav-link" href="/about-us">About</Link>
                        </li>
                        <li className="nav-item h5">
                            <Link className="nav-link" href="/post-grid">Our Posts</Link>
                        </li>
                        <li className="nav-item h5">
                            <Link className="nav-link" href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="bg-primary bg-opacity-10 p-4 mb-4 text-center w-100 rounded">
                        <span>The Buneydi</span>
                        <h3>You can become an editor</h3>
                        <p>Creating narratives, creating discourse: Use buneydi to boost your editor voice!</p>
                        <Link href="/become-an-editor" className="btn btn-danger">Become Editor!</Link>
                    </div>
                </div>
                <div className="mt-auto pb-3">
                    <p className="text-body mb-2 fw-bold">İstanbul, Turkey (HQ)</p>
                    <address className="mb-0">Cebeci Mah. 2519. Sok.</address>
                    <a href="#" className="text-body d-block">info@buneydi.com</a>
                </div>
            </div>
        </div>

    )
}