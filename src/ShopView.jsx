import { useState } from "react";

const ShopView = () => {
  const [tab, setTab] = useState("grooming");

  return (
    <div className="container my-4">
      <div className="row g-4">

        {/* LEFT SIDE */}
        <div className="col-lg-8">

          {/* Gallery */}
          <div className="row g-2">
            <div className="col-6">
              <img src="https://picsum.photos/600/700?1" className="img-fluid rounded" />
            </div>
            <div className="col-6">
              <div className="row g-2">
                <div className="col-6">
                  <img src="https://picsum.photos/300/300?2" className="img-fluid rounded" />
                </div>
                <div className="col-6">
                  <img src="https://picsum.photos/300/300?3" className="img-fluid rounded" />
                </div>
                <div className="col-6">
                  <img src="https://picsum.photos/300/300?4" className="img-fluid rounded" />
                </div>
                <div className="col-6">
                  <img src="https://picsum.photos/300/300?5" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="d-flex gap-4 border-bottom mt-4">
            <button className={`btn btn-sm ${tab==="about"?"fw-bold":""}`} onClick={()=>setTab("about")}>About</button>
            <button className={`btn btn-sm ${tab==="grooming"?"fw-bold":""}`} onClick={()=>setTab("grooming")}>Grooming</button>
            <button className={`btn btn-sm ${tab==="pet"?"fw-bold":""}`} onClick={()=>setTab("pet")}>Pet Shops</button>
          </div>

          {/* Grooming Section */}
          {tab === "grooming" && (
            <>
              <h6 className="mt-3">Available Grooming Options</h6>
              <span className="badge bg-light text-dark mb-2">In Store</span>

              <h6 className="mt-3">Pets Accepted</h6>
              <div className="d-flex gap-4">
                <div className="text-center">
                  <img src="https://i.pravatar.cc/80?img=12" className="rounded-circle" />
                  <p className="small mt-1">Dogs</p>
                </div>
                <div className="text-center">
                  <img src="https://i.pravatar.cc/80?img=22" className="rounded-circle" />
                  <p className="small mt-1">Cats</p>
                </div>
              </div>

              <h6 className="mt-4">Grooming Packages</h6>

              <div className="accordion" id="groomingAcc">
                {["Hair Cut Styling", "Calming Massage", "Bubble Bath & Blow Dry"].map((item, i) => (
                  <div className="accordion-item" key={i}>
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={`#g${i}`}>
                        {item}
                        <span className="ms-auto small text-muted">Dogs & Cats</span>
                      </button>
                    </h2>
                    <div id={`g${i}`} className="accordion-collapse collapse">
                      <div className="accordion-body small">
                        Professional service for your pets.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4">
          <div className="card p-3 shadow-sm">
            <h5>Heads Up For Tails</h5>
            <p className="small text-muted">Koramangala 8th Block, Bengaluru</p>

            <div className="mb-2">
              <strong>Address</strong>
              <p className="small mb-1">582, Koramangala 8th Block, Bengaluru, Karnataka 560034</p>
              <a href="#" className="small text-warning">Check on map</a>
            </div>

            <div className="mb-2">
              <strong>Timings</strong>
              <p className="small text-warning">Open until 9:30 pm</p>
            </div>

            <button className="btn btn-dark w-100 mb-3">
              <i className="bi bi-whatsapp"></i> Enquire Now
            </button>

            {/* MAP */}
            <iframe
              src="https://maps.google.com/maps?q=koramangala&t=&z=13&ie=UTF8&iwloc=&output=embed"
              height="200"
              className="w-100 border rounded"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopView;
