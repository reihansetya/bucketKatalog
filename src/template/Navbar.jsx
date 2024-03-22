/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span style={{ color: "#769FCD" }}>Bucket by</span> Lisa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { label: "Home", href: "/" },
                { label: "Produk", href: "/product" },
                { label: "Promo", href: "/promo" },
                { label: "Contact", href: "/kontak" },
              ].map((item) => (
                <li key={item.label} className="nav-item">
                  <Link className="nav-link" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
