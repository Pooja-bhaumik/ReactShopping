import React from "react";

const BannerSection = () => {
  return (
    <section class="banner_sec">
      <div class="banner">
        <div class="container">
          <div class="row banner-content">
            <div class="col-md-8">
              <div class="">
                <h1 class="text-white font-weight-bold banner-head px-4">
                  Shop With Us
                </h1>
                <p class="text-white banner-text lead px-4 mb-0 py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                  officia.
                </p>
              </div>
              <div class="banner-button px-4">
                <a
                  href=""
                  class="btn btn-outline px-4 text-white py-2 me-2 rounded-0"
                >
                  Shop Now
                </a>
                <a
                  href=""
                  class="
                btn btn-outline
                px-4
                text-dark
                bg-white
                fw-bold
                py-2
                rounded-0
              "
                >
                  Club Membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
