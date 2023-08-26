// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   let location = useLocation();

//   React.useEffect(() => {
//     // console.log(location.pathname);
//   }, [location]);

//   return (
//     <nav
//       className="navbar navbar-expand-lg bg-body-tertiary"
//       data-bs-theme="dark"
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="#">
//           iNotebook
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link
//                 className={`nav-link ${
//                   location.pathname === "/" ? "active" : ""
//                 }`}
//                 aria-current="page"
//                 to="/"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className={`nav-link ${
//                   location.pathname === "/about" ? "active" : ""
//                 }`}
//                 to="/about"
//               >
//                 About
//               </Link>
//             </li>
//           </ul>
//           {!localStorage.getItem("token") ? (
//             <form className="d-flex">
//               <Link className="btn btn-primary mx-1" to="/login" role="button">
//                 Login
//               </Link>
//               <Link className="btn btn-primary mx-1" to="/signup" role="button">
//                 Signup
//               </Link>
//             </form>
//           ) : (
//             <button onClick={handleLogout} className="btn btn-primary">
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleLoginBtnClick = () => {
    navigate("/login");
    
  };

  const handleSignupBtnClick = () => {
    navigate("/signup");
    
  };

 
    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
    };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Health <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
      </ul>

      {!localStorage.getItem("token") ? (
             <form className="d-flex">
             <button
        className="navbar-btn mx-2"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleLoginBtnClick}
      >
        <FontAwesomeIcon icon={faUser} /> Login
      </button>
      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleSignupBtnClick}
      >
        <FontAwesomeIcon icon={faUser} />Signup
      </button>
             </form>
           ) : (
            <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleLogout}
      >
        <FontAwesomeIcon icon={faUser} />Logout
      </button>
           )}

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
