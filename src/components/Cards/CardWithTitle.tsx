
export default function CardWithTitle() {
    return (
        <div className="card">
            <div className="position-relative">
                <img className="card-img" src="assets/images/blog/4by3/09.jpg" alt="Card image" />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                    <div className="w-100 mt-auto">
                        <a href="#" className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a>
                    </div>
                </div>
            </div>
            <div className="card-body px-0 pt-3">
                <h5 className="card-title"><a href="post-single-3.html" className="btn-link text-reset fw-bold">10 tell-tale signs you need to get a new business</a></h5>
                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                        <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                                <div className="avatar avatar-xs">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                                </div>
                                <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Bryan</a></span>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">Jun 01, 2022</li>
                </ul>
            </div>
        </div>
    )
}
