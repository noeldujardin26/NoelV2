import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import PromoBanner from "../components/PromoBanner";
import "./Navbar.css";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PromoBanner />
      <nav className={`navbar navbar-expand-lg sticky-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="/assets/logo-2.png" alt="DestockNoël" className="navbar-logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav m-auto text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Produits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  À propos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons text-center">
              <NavLink to="/cart" className="btn">
                <i className="fa fa-cart-shopping me-1"></i> Panier ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
