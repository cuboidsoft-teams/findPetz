import { useState } from "react";
import productsData from "./productsData.jsx";
import { Link } from "react-router-dom";


const AllProduct = () => {
  const [search, setSearch] = useState("");
  const [pet, setPet] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const filtered = productsData.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (pet === "" || p.pet === pet) &&
      (category === "" || p.category === category) &&
      (price === "" ||
        (price === "low" && p.price < 500) ||
        (price === "mid" && p.price >= 500 && p.price <= 2000) ||
        (price === "high" && p.price > 2000))
    );
  });

  return (
    <div className="container-fuid">
         <div className="container my-3 px-0">

      {/* Title */}
      <div className="px-2 mb-2">
        <h5 className="fw-bold mb-1">Browse All Pet Products</h5>
        <p className="text-muted small mb-0">
          Find food, treats & essentials from trusted sellers
        </p>
      </div>

      {/* App-style search & filters */}
      <div className="px-2 mb-3">
        <div className="d-flex gap-2 align-items-center overflow-auto">

          {/* Search */}
          <div className="search-pill">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Pet */}
          <select className="filter-pill" onChange={(e) => setPet(e.target.value)}>
            <option value="">Pet</option>
            <option>Dog</option>
            <option>Cat</option>
          </select>

          {/* Category */}
          <select className="filter-pill" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Category</option>
            <option>Food</option>
            <option>Treat</option>
          </select>

          {/* Price */}
          <select className="filter-pill" onChange={(e) => setPrice(e.target.value)}>
            <option value="">Price</option>
            <option value="low">Below ₹500</option>
            <option value="mid">₹500 - ₹2000</option>
            <option value="high">Above ₹2000</option>
          </select>

        </div>
      </div>

      {/* Grid */}
      <div className="row g-0">
        {filtered.map((p) => (
          <div key={p.id} className="col-6 col-md-3">
            <div className="product-ui h-100">
              <i className="bi bi-heart wishlist"></i>
              <img src={p.img} alt={p.title} />
              <div className="px-1">
                <h6 className="title">{p.title}</h6>
                <p className="price mb-1">₹{p.price}</p>
                <Link to="/productView" className="btn btn-warning btn-sm w-100">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>
  );
};

export default AllProduct;
