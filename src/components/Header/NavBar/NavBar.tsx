import Link from "next/link";
import SearchRegisterOffCanvasControl from "./NavBarBottom/SearchRegisterOffCanvasControl";
import NavBarCard from "@/components/Cards/NavBarCard";
import TrendingTags from "./NavBarBottom/TrendingTags";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img className="navbar-brand-item light-mode-item" src="assets/images/logo.svg" alt="logo" />
                    <img className="navbar-brand-item dark-mode-item" src="assets/images/logo-light.svg" alt="logo" />
                </a>

                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-body h6 d-none d-sm-inline-block">Menu</span>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-nav-scroll mx-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                            <ul className="dropdown-menu" aria-labelledby="homeMenu">
                                <li> <a className="dropdown-item active" href="index.html">Home default</a></li>
                                <li> <a className="dropdown-item" href="index-lazy.html">Home lazy load</a></li>
                                <li> <a className="dropdown-item" href="index-2.html">Magazine classic</a></li>
                                <li> <a className="dropdown-item" href="index-3.html">Magazine</a></li>
                                <li> <a className="dropdown-item" href="index-4.html">Home cards</a></li>
                                <li> <a className="dropdown-item" href="index-5.html">Blog classic</a></li>
                                <li> <a className="dropdown-item" href="index-6.html">Blog Personal </a></li>
                                <li> <a className="dropdown-item" href="index-7.html">Blog Vintage</a></li>
                                <li> <a className="dropdown-item" href="index-8.html">Blog Tech</a></li>
                                <li> <a className="dropdown-item" href="index-9.html">Blog Fashion</a></li>
                                <li> <a className="dropdown-item" href="index-10.html">Blog Podcast</a></li>
                                <li> <a className="dropdown-item" href="index-11.html">Home Shop </a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                            <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                                <li> <a className="dropdown-item" href="about-us.html">About</a></li>
                                <li> <a className="dropdown-item" href="contact-us.html">Contact</a></li>
                                <li className="dropdown-submenu dropend">
                                    <a className="dropdown-item dropdown-toggle" href="#">Shop</a>
                                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                        <li> <a className="dropdown-item" href="shop-grid.html">Shop grid</a> </li>
                                        <li> <a className="dropdown-item" href="shop-detail.html">Shop detail</a> </li>
                                        <li> <a className="dropdown-item" href="checkout.html">Checkout</a> </li>
                                        <li> <a className="dropdown-item" href="my-cart.html">Cart</a> </li>
                                        <li> <a className="dropdown-item" href="empty-cart.html">Empty Cart</a> </li>
                                    </ul>
                                </li>
                                <li className="dropdown-submenu dropend">
                                    <a className="dropdown-item dropdown-toggle" href="#">Other Archives</a>
                                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                        <li> <a className="dropdown-item" href="author.html">Author Page</a> </li>
                                        <li> <a className="dropdown-item" href="categories.html">Category page 1</a> </li>
                                        <li> <a className="dropdown-item" href="categories-2.html">Category page 2</a> </li>
                                        <li> <a className="dropdown-item" href="tag.html"># tag</a> </li>
                                        <li> <a className="dropdown-item" href="search-result.html">Search result</a> </li>
                                    </ul>
                                </li>
                                <li> <a className="dropdown-item" href="404.html">Error 404</a></li>
                                <li> <a className="dropdown-item" href="signin.html">signin</a></li>
                                <li> <a className="dropdown-item" href="signup.html">signup</a></li>
                                <li> <a className="dropdown-item" href="offline.html">offline</a></li>
                                <li className="dropdown-divider"></li>
                                <li className="dropdown-submenu dropend">
                                    <a className="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
                                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                        <li className="dropdown-submenu dropend">
                                            <a className="dropdown-item dropdown-toggle" href="#">Dropdown (end)</a>
                                            <ul className="dropdown-menu" data-bs-popper="none">
                                                <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                                                <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                                            </ul>
                                        </li>
                                        <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                                        <li className="dropdown-submenu dropstart">
                                            <a className="dropdown-item dropdown-toggle" href="#">Dropdown (start)</a>
                                            <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                                <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                                                <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                                            </ul>
                                        </li>
                                        <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                                    </ul>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                    <a className="dropdown-item" href="https://support.webestica.com/" target="_blank">
                                        <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>Support
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="docs/index.html" target="_blank">
                                        <i className="text-danger fa-fw bi bi-card-text me-2"></i>Documentation
                                    </a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                    <a className="dropdown-item" href="https://blogzine.webestica.com/rtl" target="_blank">
                                        <i className="text-info fa-fw bi bi-toggle-off me-2"></i>RTL demo
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                                        <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy blogzine!
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Post</a>
                            <ul className="dropdown-menu" aria-labelledby="postMenu">
                                <li className="dropdown-submenu dropend">
                                    <a className="dropdown-item dropdown-toggle" href="#">Post grid</a>
                                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                        <li> <a className="dropdown-item" href="post-grid.html">Post grid</a> </li>
                                        <li> <a className="dropdown-item" href="post-grid-4-col.html">Post grid 4 col</a> </li>
                                        <li> <a className="dropdown-item" href="post-grid-masonry.html">Post grid masonry</a> </li>
                                        <li> <a className="dropdown-item" href="post-grid-masonry-filter.html">Post grid masonry filter</a> </li>
                                        <li> <a className="dropdown-item" href="post-large-and-grid.html">Post mixed large than grid</a> </li>
                                    </ul>
                                </li>
                                <li> <a className="dropdown-item" href="post-list.html">Post list</a> </li>
                                <li> <a className="dropdown-item" href="post-list-2.html">Post list 2</a> </li>
                                <li> <a className="dropdown-item" href="post-cards.html">Post card</a> </li>
                                <li> <a className="dropdown-item" href="post-overlay.html">Post Overlay</a> </li>
                                <li> <a className="dropdown-item" href="post-types.html">Post types</a> </li>
                                <li className="dropdown-divider"></li>
                                <li> <a className="dropdown-item" href="post-single.html">Post single magazine</a> </li>
                                <li> <a className="dropdown-item" href="post-single-2.html">Post single classic</a> </li>
                                <li> <a className="dropdown-item" href="post-single-3.html">Post single minimal</a> </li>
                                <li> <a className="dropdown-item" href="post-single-4.html">Post single card</a> </li>
                                <li> <a className="dropdown-item" href="post-single-5.html">Post single review</a> </li>
                                <li> <a className="dropdown-item" href="post-single-6.html">Post single video</a> </li>
                                <li> <a className="dropdown-item" href="podcast-single.html">Podcast single</a> </li>
                                <li className="dropdown-divider"></li>
                                <li> <a className="dropdown-item" href="pagination-styles.html">Pagination styles</a> </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown dropdown-fullwidth">
                            <a className="nav-link dropdown-toggle" href="#" id="megaMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Lifestyle</a>
                            <div className="dropdown-menu" aria-labelledby="megaMenu">
                                <div className="container">
                                    <div className="row g-4 p-3 flex-fill">
                                        <NavBarCard src="/assets/images/blog/16by9/small/03.jpg" title="Skills that you can learn from business" authorName="Judy Nguyen" authorPage="#" postPage="#" time="Sep 07, 2022" />
                                        <NavBarCard src="/assets/images/blog/16by9/small/03.jpg" title="Skills that you can learn from business" authorName="Judy Nguyen" authorPage="#" postPage="#" time="Sep 07, 2022" />
                                        <NavBarCard src="/assets/images/blog/16by9/small/03.jpg" title="Skills that you can learn from business" authorName="Judy Nguyen" authorPage="#" postPage="#" time="Sep 07, 2022" />
                                        <NavBarCard src="/assets/images/blog/16by9/small/03.jpg" title="Skills that you can learn from business" authorName="Judy Nguyen" authorPage="#" postPage="#" time="Sep 07, 2022" />
                                    </div>
                                    <div className="row px-3">
                                        <div className="col-12">
                                            <TrendingTags tags={[{ name: "Travel", url: "/travel" }, { name: "Business", url: "/business" }, { name: "Tech", url: "/tech" }, { name: "Gadgets", url: "/gadgets" }, { name: "Lifestyle", url: "/lifestyle" }, { name: "Vaccine", url: "/vaccine" }, { name: "Sports", url: "/sports" }, { name: "Covid-19", url: "/covid-19" }, { name: "Politics", url: "/politics" }]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item"> <Link className="nav-link" href="/editorial">Editorial</Link></li>
                    </ul>
                </div>

                <SearchRegisterOffCanvasControl />
            </div>
        </nav>
    )
}