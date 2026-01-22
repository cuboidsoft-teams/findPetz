import { Link } from "react-router-dom";

const BottomMenu = () => {
  const profilePic = `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70) + 1}`;

  return (
    <nav
      className="fixed-bottom bg-white border-top shadow-sm d-block d-md-none"
      style={{ height: "64px" }}
    >
      <ul className="d-flex w-100 h-100 m-0 p-0 list-unstyled">

        {/* Home */}
        <li className="flex-fill d-flex align-items-center justify-content-center">
          <Link
            to="/"
            className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
          >
            <i className="bi bi-house-door-fill fs-5"></i>
            <span style={{ fontSize: "10px" }}>Home</span>
          </Link>
        </li>

        {/* Categories */}
        <li className="flex-fill d-flex align-items-center justify-content-center">
          <Link
            to="/categories"
            className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
          >
            <i className="bi bi-grid-fill fs-5"></i>
            <span style={{ fontSize: "10px" }}>Categories</span>
          </Link>
        </li>

        {/* Hub */}
        <li className="flex-fill d-flex align-items-center justify-content-center">
          <Link
            to="/hub"
            className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
          >
            <i className="bi bi-shop fs-5"></i>
            <span style={{ fontSize: "10px" }}>findPetz Hub</span>
          </Link>
        </li>

        {/* Cart */}
        <li className="flex-fill d-flex align-items-center justify-content-center">
          <Link
            to="/cart"
            className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
          >
            <i className="bi bi-cart-fill fs-5"></i>
            <span style={{ fontSize: "10px" }}>Cart</span>
          </Link>
        </li>

        {/* Account */}
        <li className="flex-fill d-flex align-items-center justify-content-center">
          <Link
            to="/account"
            className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
          >
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-circle"
              style={{ width: "30px", height: "30px", objectFit: "cover" }}
            />
            <span style={{ fontSize: "10px" }}>Account</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default BottomMenu;
