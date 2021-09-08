import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";

const ProductItem = ({ img, title, like, ratting, desc }) => {
  return (
    <div class="col-md-4 mb-5">
      <div class="product-item">
        <div class="product-img mb-5">
          <img src={img} className="img-fluid" />
        </div>
        <div class="product-content">
          <h3>{title}</h3>
          <ul class="p-0">
            <li class="d-inline-block">
              <a routerLink="" class="px-2">
                <FaStar className="rating " />
              </a>
              <span>{ratting}</span>
            </li>
            <li class="d-inline-block">
              <a routerLink="" class="px-2">
                <FaHeart className="like" />
              </a>
              <span>{like}</span>
            </li>
          </ul>
          <p>{desc}</p>
          <div class="product_action">
            <a routerlink="" class="btn btn-outline rounded-0 me-2">
              Cart
            </a>
            <a routerlink="" class="btn btn-outline-black rounded-0">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
