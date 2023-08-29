
export default function CardImageOverlay() {
    return (
        <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{ backgroundImage: 'url(assets/images/blog/1by1/02.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 mt-auto">
                    <a href="#" className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</a>
                    <h4 className="text-white"><a href="post-single-4.html" className="btn-link stretched-link text-reset">Best Pinterest boards for learning about business</a></h4>
                    <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li className="nav-item position-relative">
                            <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Bryan</a>
                            </div>
                        </li>
                        <li className="nav-item">Aug 18, 2022</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
