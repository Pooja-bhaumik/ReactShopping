import React from "react";
import "../styles/topheader.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
function Topheader() {
  return (
    <section class="top-header bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <ul class="mb-0 top-menu d-flex align-items-center">
              <li>
                <a routerLink="#">
                  <FaFacebookF className="text-white" />
                </a>
              </li>
              <li>
                <a routerLink="#">
                  <FaTwitter className="text-white" />
                </a>
              </li>
              <li>
                <a routerLink="#">
                  <FaInstagram className="text-white" />
                </a>
              </li>
              <li>
                <a routerLink="#">
                  <FaLinkedin className="text-white" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-7 centermid justify-content-end top_contact">
            <div class="top_ph_num mx-3">
              <span>
                <FaPhoneAlt className="top-contact-icon" />
              </span>
              <span class="d-none d-md-inline-block">(+1) 234 5678 9101</span>
            </div>
            <div class="top_msg">
              <span>
                <FaEnvelope className="top-contact-icon" />
              </span>
              <span class="d-none d-md-inline-block">shop@yourdomain.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topheader;
