function Footer() {
    return (
        <footer className="footer-main pt-5 pb-4">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-6 col-md-2">
                        <h6 className="footer-title">Pets</h6>
                        <ul className="footer-list">
                            <li>Dogs</li>
                            <li>Cats</li>
                            <li>Birds</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h6 className="footer-title">Resources</h6>
                        <ul className="footer-list">
                            <li>Pet Blogs</li>
                            <li>Pet News</li>
                            <li>Pet Guides</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h6 className="footer-title">Tools</h6>
                        <ul className="footer-list">
                            <li>Dog Breed Selector</li>
                            <li>Pet Name Generator</li>
                            <li>Pet Parent App</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h6 className="footer-title">Shop & Discover</h6>
                        <ul className="footer-list">
                            <li>T-Shirt</li>
                            <li>Happy Mart</li>
                            <li>Pet Business</li>
                            <li>Pet Events</li>
                            <li>Rescue & Shelters</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <h6 className="footer-title">For Pet Businesses</h6>
                        <ul className="footer-list">
                            <li>Pet Influencers</li>
                            <li>Pet Startups</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-2">
                        <h6 className="footer-title">Company</h6>
                        <ul className="footer-list">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src="https://happypetproduction.s3.ap-south-1.amazonaws.com/public_assets/footer_banner.webp" alt="" className="w-100" />
        </footer>
    )

}

export default Footer;