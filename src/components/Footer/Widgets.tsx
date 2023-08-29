
export default function Widgets() {
    return (
        <div className="row pt-5">
            <div className="col-md-6 col-lg-3 mb-4">
                <h5 className="mb-4 text-white">Recent post</h5>
                <div className="mb-4 position-relative">
                    <div><a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</a></div>
                    <a href="post-single-3.html" className="btn-link text-white fw-normal">Up-coming business bloggers, you need to watch</a>
                    <ul className="nav nav-divider align-items-center small mt-2 text-muted">
                        <li className="nav-item position-relative">
                            <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Dennis</a>
                            </div>
                        </li>
                        <li className="nav-item">Apr 06, 2022</li>
                    </ul>
                </div>
                <div className="mb-4 position-relative">
                    <div><a href="#" className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a></div>
                    <a href="post-single-3.html" className="btn-link text-white fw-normal">How did we get here? The history of the business told through tweets</a>
                    <ul className="nav nav-divider align-items-center small mt-2 text-muted">
                        <li className="nav-item position-relative">
                            <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Larry</a>
                            </div>
                        </li>
                        <li className="nav-item">May 29, 2022</li>
                    </ul>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
                <h5 className="mb-4 text-white">Navigation</h5>
                <div className="row">
                    <div className="col-6">
                        <ul className="nav flex-column text-primary-hover">
                            <li className="nav-item"><a className="nav-link pt-0" href="#">Features</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Style Guide</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Get Theme</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Privacy Policy</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Newsletter</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="nav flex-column text-primary-hover">
                            <li className="nav-item"><a className="nav-link pt-0" href="#">News</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Career <span className="badge text-bg-danger ms-2">2 Job</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Technology</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Startups</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Gadgets</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Inspiration</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 mb-4">
                <h5 className="mb-4 text-white">Get Regular Updates</h5>
                <ul className="nav flex-column text-primary-hover">
                    <li className="nav-item"><a className="nav-link pt-0" href="#"><i className="fab fa-whatsapp fa-fw me-2"></i>WhatsApp</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><i className="fab fa-youtube fa-fw me-2"></i>YouTube</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><i className="far fa-bell fa-fw me-2"></i>Website Notifications</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><i className="far fa-envelope fa-fw me-2"></i>Newsletters</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-headphones-alt fa-fw me-2"></i>Podcasts</a></li>
                </ul>
            </div>

            <div className="col-sm-6 col-lg-3 mb-4">
                <h5 className="mb-4 text-white">Our mobile App</h5>
                <p className="text-muted">Download our App and get the latest Breaking News Alerts and latest headlines and daily articles near you.</p>
                <div className="row g-2">
                    <div className="col">
                        <a href="#"><img className="w-100" src="assets/images/app-store.svg" alt="app-store" /></a>
                    </div>
                    <div className="col">
                        <a href="#"><img className="w-100" src="assets/images/google-play.svg" alt="google-play" /></a>
                    </div>
                </div>
            </div>
        </div>

    )
}
