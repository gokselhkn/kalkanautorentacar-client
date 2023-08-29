
export default function Newsletter() {
    return (
        <div className="row pt-3 pb-4">
            <div className="col-md-3">
                <img src="assets/images/logo-footer.svg" alt="footer logo" />
            </div>
            <div className="col-md-5">
                <p className="text-muted">The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>
            </div>
            <div className="col-md-4">
                <form className="row row-cols-lg-auto g-2 align-items-center justify-content-end">
                    <div className="col-12">
                        <input type="email" className="form-control" placeholder="Enter your email address" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary m-0">Subscribe</button>
                    </div>
                    <div className="form-text mt-2">By subscribing you agree to our
                        <a href="#" className="text-decoration-underline text-reset">Privacy Policy</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
