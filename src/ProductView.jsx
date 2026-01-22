import { useState } from "react";

const ProductView = () => {
  const [activeImg, setActiveImg] = useState(0);

  const images = [
    "https://i.ibb.co/5n3Y3wD/zoe1.png",
    "https://i.ibb.co/VLPjQkB/zoe2.png",
    "https://i.ibb.co/0Z1N3n4/zoe3.png",
  ];

  return (
    <div className="container my-4">

      {/* Breadcrumb */}
      <p className="small text-muted mb-3">
        Home / Mart / <strong>Zoe Chicken, Quinoa & Black Bean</strong>
      </p>

      <div className="row">

        {/* LEFT: IMAGE GALLERY */}
        <div className="col-md-6 mb-4">
          <div className="border p-3 rounded-3 text-center position-relative">

            <i className="bi bi-heart wishlist-icon"></i>

            <img
              src={images[activeImg]}
              className="img-fluid mb-3 main-product-img"
              alt="product"
            />

            <div className="d-flex gap-2 justify-content-start">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImg(i)}
                  className={`thumb-img ${activeImg === i ? "active" : ""}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="col-md-6">

          <p className="small text-muted mb-1">
            Posted on 15th January 2026
          </p>

          <h4 className="fw-bold">
            Zoe Chicken, Quinoa & Black Bean | Small Breed Dog Food | 2Kg
          </h4>

          <p className="text-muted small">Dog &nbsp; • &nbsp; Food</p>

          <h3 className="fw-bold my-3">₹1,999</h3>

          {/* Payment */}
          <h6 className="fw-bold mb-2">Payment Options</h6>
          <div className="d-flex flex-wrap gap-3 small mb-3">
           <h6 className="fw-bold mb-2">Payment Options</h6>
                <div className="d-flex flex-wrap gap-3 small mb-3">

                <span className="d-flex align-items-center gap-1">
                    <i className="bi bi-phone-fill text-warning"></i> UPI
                </span>

                <span className="d-flex align-items-center gap-1">
                    <i className="bi bi-credit-card-fill text-warning"></i> Credit / Debit Card
                </span>

                <span className="d-flex align-items-center gap-1">
                    <i className="bi bi-bank text-warning"></i> Net Banking
                </span>

                </div>

          </div>

          {/* Seller */}
          <div className="d-flex align-items-center justify-content-between border rounded-3 p-3 mb-3 bg-light">
            <div className="d-flex align-items-center gap-2">
              <div className="seller-avatar">M</div>
              <strong>Maplepets International Pvt Ltd</strong>
            </div>
            <button className="btn btn-warning btn-sm">
              Enquire
            </button>
          </div>

          {/* Description */}
          <h6 className="fw-bold">Description</h6>
          <p className="small text-muted">
            Quality sources of protein, including chicken and eggs, are at the
            foundation of this recipe. It’s what they are paired with that
            makes Zoë different. From superfoods like quinoa and berries to
            healthy fats and probiotics, Zoë fresh dog food is created with
            carefully selected ingredients to offer pet parents a healthier
            option and pets a flavourful dish they can enjoy.
          </p>
        </div>
      </div>

      {/* Similar Products */}
      <h5 className="fw-bold mt-5 mb-3">Similar Products</h5>
      <div className="row g-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="col-6 col-md-3">
            <div className="border p-2 text-center position-relative">
              <i className="bi bi-heart wishlist"></i>
              <img
                src="https://via.placeholder.com/300x300"
                className="img-fluid mb-2"
              />
              <p className="small mb-1 fw-semibold">
                Chicken Treats
              </p>
              <p className="small fw-bold">₹299</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
