
export default function Trending() {
    return (
        <div className="container">
            <div className="row g-0">
                <div className="col-12 bg-primary bg-opacity-10 p-2 rounded">
                    <div className="d-sm-flex align-items-center text-center text-sm-start">
                        <div className="me-3">
                            <span className="badge bg-primary p-2 px-3">Trending:</span>
                        </div>
                        <div className="tiny-slider arrow-end arrow-xs arrow-white arrow-round arrow-md-none">
                            <div className="tiny-slider-inner"
                                data-autoplay="true"
                                data-hoverpause="true"
                                data-gutter="0"
                                data-arrow="true"
                                data-dots="false"
                                data-items="1">
                                <div> <a href="#" className="text-reset btn-link">The most common business debate isn't as black and white as you might think</a></div>
                                <div> <a href="#" className="text-reset btn-link">How the 10 worst business fails of all time could have been prevented </a></div>
                                <div> <a href="#" className="text-reset btn-link">The most common business debate isn't as black and white as you might think </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
