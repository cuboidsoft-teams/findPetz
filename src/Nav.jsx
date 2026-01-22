import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Grooming from "./Groooming";
import About from "./About";
import Logo from "./assets/logo.png";
import Footer from "./Footer";
import BottomMenu from "./BottomMenu";
import AllProduct from "./AllProduct";
import ProductView from "./ProductView";
import ShopView from "./ShopView";
import AllStore from "./AllStore";


function Nav() {
    return (
        <>
            <nav className="navbar shadow-sm navbar-expand-lg bg-white position-sticky top-0 z-2">
                <div className="container">
                    <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/"><img src={Logo} alt="" style={{ width: "22px" }} /> FindPetz</Link>


                    {/* Mobile Location Bar */}
                    <div className="mobile-location d-lg-none">
                        <button
                            className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                            data-bs-toggle="modal"
                            data-bs-target="#nearbyModal"
                        >
                            <i className="bi bi-geo-alt"></i>
                            <span>560034</span>
                        </button>
                    </div>
                  {/* Mobile Toggle */}
                        <button
                        className="navbar-toggler border-0 d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileMenu"
                        >
                        <i className="bi bi-grid-fill fs-4"></i>
                        </button>





                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/grooming" className="nav-link">Grooming</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service" className="nav-link">Services</Link>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center gap-4 ms-auto nav-actions">

                            {/* Pincode */}
                            <button
                                className="btn btn-light nav-icon-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#nearbyModal"
                            >
                                <i className="bi bi-geo-alt"></i>
                                <span>560034</span>
                            </button>

                            {/* Wishlist */}
                            <button className="btn btn-light nav-icon-btn">
                                <i className="bi bi-heart"></i>
                                <span>Wishlist</span>
                            </button>

                            {/* Cart */}
                            <button className="btn btn-light nav-icon-btn">
                                <i className="bi bi-bag"></i>
                                <span>Cart</span>
                            </button>

                            {/* Login */}
                            <button
                                className="btn login-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#signupModal"
                            >
                                <i className="bi bi-person"></i>
                                Login/Sign Up
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/grooming" element={<Grooming></Grooming>} />
                <Route path="/service" element={<Service></Service>} />
                <Route path="/products" element={<AllProduct></AllProduct>} />
                <Route path="/productView" element={<ProductView></ProductView>} />
                <Route path="/shopView" element={<ShopView></ShopView>} />
                <Route path="/allShop" element={<AllStore></AllStore>} />
            </Routes>

            <div className="modal fade" id="nearbyModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Change Location</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <input className="form-control mb-2" placeholder="Enter Pincode" />
                            <button className="btn btn-primary w-100">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="mobileMenu"
            >
                <div className="offcanvas-header">
                    <h5 className="fw-bold">FindPetz</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="navbar-nav gap-2">

                        <li className="nav-item">
                            <Link to="/" className="nav-link" data-bs-dismiss="offcanvas">
                                <i className="bi bi-house me-2"></i> Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link" data-bs-dismiss="offcanvas">
                                <i className="bi bi-info-circle me-2"></i> About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/grooming" className="nav-link" data-bs-dismiss="offcanvas">
                                <i className="bi bi-scissors me-2"></i> Grooming
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/service" className="nav-link" data-bs-dismiss="offcanvas">
                                <i className="bi bi-briefcase me-2"></i> Services
                            </Link>
                        </li>

                        <hr />

                        <button className="btn btn-light w-100 mb-2">
                            <i className="bi bi-heart me-2"></i> Wishlist
                        </button>

                        <button className="btn btn-light w-100 mb-2">
                            <i className="bi bi-bag me-2"></i> Cart
                        </button>

                        <button
                            className="btn btn-warning w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#signupModal"
                        >
                            <i className="bi bi-person me-2"></i> Login / Sign Up
                        </button>

                    </ul>
                </div>
            </div>


            <BottomMenu />
            <Footer />
        </>
    )
}

export default Nav;