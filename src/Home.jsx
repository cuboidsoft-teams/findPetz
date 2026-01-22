import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

    const [activeTab, setActiveTab] = useState("Grooming");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [dog, setDog] = useState(true);
    const [cat, setCat] = useState(true);

    const fetchCity = async (pin) => {
        if (pin.length === 6) {
            try {
                const res = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
                if (res.data[0].Status === "Success") {
                    setCity(res.data[0].PostOffice[0].District);
                } else {
                    setCity("Invalid");
                }
            } catch {
                setCity("Error");
            }
        } else {
            setCity("");
        }
    };
    return (
        <>
            <section className="hero-section d-flex align-items-center">
                <div className="overlay"></div>

                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-6 text-white">

                            <span className="badge bg-light text-dark small mb-2">
                                CURATED WITH CARE
                            </span>

                            <h1 className="fw-bold display-4 mb-2">
                                Find The Best Pet Businesses Nearby
                            </h1>

                            <p className="small mb-3">
                                <i className="bi bi-check-circle-fill text-success"></i>{" "}
                                Best & verified pet businesses
                            </p>

                            {/* SEARCH BOX */}
                            <div className="mini-search-box bg-white rounded-3 p-3 shadow-sm">

                                {/* Tabs */}
                                <div className="d-flex flex-wrap gap-2 mb-2">
                                    {["Grooming", "Boarding", "Shops", "Training", "Vet"].map(tab => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`mini-tab ${activeTab === tab ? "active" : ""}`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                <div className="row g-2 align-items-center small">

                                    {/* PINCODE */}
                                    <div className="col-4">
                                        <label className="text-muted">Pincode</label>
                                        <input
                                            type="text"
                                            maxLength="6"
                                            value={pincode}
                                            onChange={(e) => {
                                                setPincode(e.target.value);
                                                fetchCity(e.target.value);
                                            }}
                                            className="form-control form-control-sm"
                                            placeholder="Enter"
                                        />
                                    </div>

                                    {/* CITY */}
                                    <div className="col-4">
                                        <label className="text-muted">City</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            value={city}
                                            disabled
                                            placeholder="Auto"
                                        />
                                    </div>

                                    {/* PET TYPE */}
                                    <div className="col-4">
                                        <label className="text-muted">For</label>
                                        <div className="d-flex gap-2 mt-1">
                                            <label className="form-check small text-dark">
                                                <input
                                                    type="checkbox"
                                                    checked={dog}
                                                    onChange={() => setDog(!dog)}
                                                    className="form-check-input"
                                                /> Dog
                                            </label>

                                            <label className="form-check small text-dark">
                                                <input
                                                    type="checkbox"
                                                    checked={cat}
                                                    onChange={() => setCat(!cat)}
                                                    className="form-check-input"
                                                /> Cat
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-2 d-grid">
                                        <button className="btn btn-warning btn-sm text-white">
                                            <i className="bi bi-search"></i> Search
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="container my-5">
                <h4 className="fw-bold mb-1">Top Brand Deals</h4>
                <p className="text-muted mb-3">
                    Grab the best offers from trusted pet brands, updated daily just for you.
                </p>

                <div className="row g-3">

                    {[
                        { color: "blue", title: "FLAT", offer: "15% OFF", note: "Use: HRC3", logo: "https://1000logos.net/wp-content/uploads/2020/07/Royal-Canin-Logo.png" },
                        { color: "red", title: "Cat Wet", offer: "Food", note: "Only ₹65", logo: "https://img.freepik.com/premium-vector/creative-catthemed-typography-with-meow-text-iconic-design_1240289-1782.jpg?semt=ais_hybrid&w=740&q=80" },
                        { color: "sky", title: "UP TO", offer: "18% OFF", note: "Use: HFARM5", logo: "https://images.seeklogo.com/logo-png/21/1/farmina-pet-foods-logo-png_seeklogo-212743.png" },
                        { color: "yellow", title: "UP TO", offer: "18% OFF", note: "Limited Offer", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsDudg8JnPUMuHQBTNBwRrYB_SWfnvI_YqQ&s" },
                        { color: "orange", title: "UP TO", offer: "10% OFF", note: "+ ₹500 Off", logo: "https://cdn.prod.website-files.com/64d4f120f563be2a0241ae1d/65c5ef4829bdcd00cf3ff9dd_Pedigree_Logo.jpg" },
                        { color: "teal", title: "Irresistibly", offer: "Tasty", note: "New Arrival", logo: "https://images.seeklogo.com/logo-png/26/1/felix-logo-png_seeklogo-263801.png" },
                    ].map((item, i) => (
                        <div key={i} className="col-6 col-md-4 col-lg-2">
                            <div className={`mini-brand-card ${item.color}`}>

                                {/* LOGO */}
                                <div className="mini-logo">
                                    <img src={item.logo} alt="brand" style={{ width: "30px" }} />
                                </div>

                                <div className="mini-content">
                                    <small>{item.title}</small>
                                    <h5>{item.offer}</h5>
                                    <span>{item.note}</span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h4 className="fw-bold">Popular Pet Boarding Services In Bengaluru</h4>
                        <p className="text-muted mb-0">
                            <small>Safe, homely boarding spaces where pets are treated like family.</small>
                        </p>
                    </div>
                </div>

                <div className="position-relative">
                    <div className="pet-slider d-flex overflow-auto gap-3">

                        {[
                            {
                                name: "Stay At Zania's",
                                area: "Bengaluru, Bannerghatta Road",
                                time: "07:00 am - 08:00 pm",
                                img: "https://happypetproduction.s3.ap-south-1.amazonaws.com/sp/stay-at-zanias-bannerghatta-road-bengaluru-img233.webp",
                                logo: "https://static.vecteezy.com/system/resources/thumbnails/020/662/330/small_2x/store-icon-logo-illustration-vector.jpg"
                            },
                            {
                                name: "Chippi's Pet Boarding",
                                area: "Bengaluru, Vartur",
                                time: "08:00 am - 08:00 pm",
                                img: "https://happypetproduction.s3.ap-south-1.amazonaws.com/sp/chippis-pet-boarding-vartur-bengaluru-img20233.webp",
                                logo: "https://static.vecteezy.com/system/resources/thumbnails/020/662/330/small_2x/store-icon-logo-illustration-vector.jpg"
                            },
                            {
                                name: "Namma Pet Boutique",
                                area: "Bengaluru, Sanjay Nagar",
                                time: "09:00 am - 09:00 pm",
                                img: "https://happypetproduction.s3.ap-south-1.amazonaws.com/sp/namma-pet-boutique-sanjay-nagar-bengaluru-img20562.webp",
                                logo: "https://static.vecteezy.com/system/resources/thumbnails/020/662/330/small_2x/store-icon-logo-illustration-vector.jpg"
                            },
                            {
                                name: "Paws n Collars",
                                area: "Bengaluru, HSR Layout",
                                time: "09:00 am - 10:00 pm",
                                img: "https://happypetproduction.s3.ap-south-1.amazonaws.com/sp/pawsncollars-hsr-layout-sector-4-bengaluru-img20545.webp",
                                logo: "https://static.vecteezy.com/system/resources/thumbnails/020/662/330/small_2x/store-icon-logo-illustration-vector.jpg"
                            }
                        ].map((item, i) => (
                           <Link to="/shopView" className="text-decoration-none text-dark">
                             <div key={i} className="pet-card flex-shrink-0">

                                <div className="pet-img">
                                    <img src={item.img} alt={item.name} />
                                    <button className="wish-btn">
                                        <i className="bi bi-heart"></i>
                                    </button>
                                </div>

                                <div className="pet-body">
                                    <img src={item.logo} className="pet-logo" alt="logo" />
                                    <h6>{item.name}</h6>
                                    <p className="text-muted small mb-1">{item.area}</p>
                                    <p className="open-text">
                                        <span>Open</span> • {item.time}
                                    </p>
                                </div>

                            </div>
                           </Link>
                        ))}

                    </div>
                    <div className="text-end mb-4">
                        <Link to="/allShop" className="text-warning fw-semibold">
                            View All <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h5 className="fw-bold">Explore The Best Pet Essentials From Trusted Sellers.</h5>
                        <p className="text-muted mb-0">
                            Shop quality pet essentials from verified sellers across all categories.
                        </p>
                    </div>
                </div>

                <div className="product-slider d-flex gap-3 overflow-auto pb-2">

                    {[
                        { name: "Zoe Chicken Small Breed", price: "₹1,999", date: "15th Jan, 2026", img: "https://happypetproduction.s3.ap-south-1.amazonaws.com/hm/zoe-chicken-quinoa-and-black-bean-small-breed-dog-food-2kg-img426.webp" },
                        { name: "The One Treat Chicken", price: "₹120", date: "13th Jan, 2026", img: "https://happypetproduction.s3.ap-south-1.amazonaws.com/hm/furloved-mahi-licious-mahimahi-fish-bites-35gms-img349.webp" },
                        { name: "Furloved Mahi Bites", price: "₹248", date: "13th Jan, 2026", img: "https://happypetproduction.s3.ap-south-1.amazonaws.com/hm/muttley-crew-the-fresh-start-duo-buff-and-mint-biscuits-chicken-and-peanut-butter-biscuits-img236.webp" },
                        { name: "Muttley Crew Biscuits", price: "₹820", date: "27th Nov, 2025", img: "https://happypetproduction.s3.ap-south-1.amazonaws.com/hm/the-one-treat-air-dried-chicken-feet-for-cats-and-dogs-35g-img352.webp" }
                    ].map((item, i) => (
                        <div key={i} className="product-card flex-shrink-0">

                            <div className="product-img">
                                <img src={item.img} alt={item.name} />
                                <button className="wish-btn">
                                    <i className="bi bi-heart"></i>
                                </button>
                            </div>

                            <div className="p-3">
                                <h6 className="fw-bold">{item.name}</h6>
                                <small className="text-muted d-block">Posted on {item.date}</small>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <strong>{item.price}</strong>
                                </div>

                                <Link to="/productView" className="btn btn-warning w-100 mt-2 text-white">
                                    <i className="bi bi-whatsapp me-1"></i> Enquire Now
                                </Link>
                            </div>

                        </div>
                    ))}

                </div>
                <div className="text-end mb-4">
                    <Link to="/products" className="text-warning fw-semibold">
                        View All <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>

            </section>

        </>
    )
}

export default Home;