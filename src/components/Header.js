import React from "react";
import "../styles/header.scss";

function Header() {
  return (
    <header className="main-header bg-white position-sticky ">
      <nav className="navbar navbar-light custom-nav navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand px-4 m-0 fw-bold nav-text" href="#">
            Selling <span className="logo-dot">.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ml-auto">
              <ul className="navbar-nav justify-content-end flex-grow-1 cutom-list p-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    routerLink="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" routerLink="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" routerLink="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" routerLink="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" routerLink="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" routerLink="#">
                    Special
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" routerLink="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
