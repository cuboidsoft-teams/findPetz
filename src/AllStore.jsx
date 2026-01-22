import { useState } from "react";
import stores from "./storesData";

const AllStore = () => {
  const [city, setCity] = useState("Bengaluru");
  const [service, setService] = useState("Boarding");
  const [dog, setDog] = useState(true);
  const [cat, setCat] = useState(true);
  const [search, setSearch] = useState("");

  const filtered = stores.filter((s) => {
    return (
      s.city === city &&
      s.service === service &&
      s.name.toLowerCase().includes(search.toLowerCase()) &&
      ((dog && s.pets.includes("Dog")) || (cat && s.pets.includes("Cat")))
    );
  });

  return (
    <div className="container">
         <div className="container-fluid my-3 px-3">

      {/* FILTER BAR */}
      <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">

        <input className="form-control form-control-sm w-auto"
          value={city} onChange={(e)=>setCity(e.target.value)} />

        <select className="form-select form-select-sm w-auto"
          value={service} onChange={(e)=>setService(e.target.value)}>
          <option>Boarding</option>
          <option>Grooming</option>
          <option>Pet Shop</option>
        </select>

        <div className="form-check">
          <input className="form-check-input" type="checkbox"
            checked={dog} onChange={()=>setDog(!dog)} />
          <label className="form-check-label small">Dog</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox"
            checked={cat} onChange={()=>setCat(!cat)} />
          <label className="form-check-label small">Cat</label>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="form-control form-control-sm w-auto"
          onChange={(e)=>setSearch(e.target.value)}
        />

        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-sliders"></i> Filters
        </button>
      </div>

      <h5 className="fw-bold mb-3">
        Find The Best Pet Boarding In {city}
      </h5>

      <div className="row g-2">

        {/* LEFT LIST */}
        <div className="col-lg-5">

          {filtered.map((s) => (
            <div key={s.id} className="card mb-3 shadow-sm border-0">
              <div className="row g-0">
                <div className="col-4">
                  <img src={s.img} className="img-fluid h-100 object-fit-cover" />
                </div>
                <div className="col-8 p-2">

                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">{s.name}</h6>
                    <i className="bi bi-heart"></i>
                  </div>

                  <p className="small text-muted mb-1">{s.address}</p>
                  <p className="small mb-1 text-danger">
                    {s.status} · {s.time}
                  </p>

                  <div className="d-flex gap-2 small text-muted">
                    <span>Day Care</span>
                    <span>+1 more</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="fw-bold text-warning">
                      ₹ {s.price}
                    </span>
                    <button className="btn btn-sm btn-warning">
                      Send Enquiry →
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT MAP */}
        <div className="col-lg-7">
          <div className="rounded overflow-hidden shadow-sm" style={{height:"85vh"}}>
            <iframe
              src="https://maps.google.com/maps?q=bengaluru&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-100 h-100 border-0"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default AllStore;
