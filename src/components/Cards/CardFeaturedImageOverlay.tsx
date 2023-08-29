
export default function CardFeaturedImageOverlay() {
    return (
        <div className="card card-overlay-bottom card-grid-lg card-bg-scale" style={{ backgroundImage: 'url(assets/images/blog/1by1/01.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
            <span className="card-featured" title="Featured post"><i className="fas fa-star"></i></span>
            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 mt-auto">
                    <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Lifestyle</a>
                    <h2 className="text-white h1"><a href="post-single-4.html" className="btn-link stretched-link text-reset">Ten tell-tale signs you need to get a new startup.</a></h2>
                    <p className="text-white">No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. </p>
                    <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                            <div className="nav-link">
                                <div className="d-flex align-items-center text-white position-relative">
                                    <div className="avatar avatar-sm">
                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="avatar" />
                                    </div>
                                    <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Louis</a></span>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">Nov 15, 2022</li>
                        <li className="nav-item">5 min read</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
