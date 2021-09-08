import React from "react";
import ProductItem from "./ProductItem";

const ProductSection = () => {
  return (
    <section class="product_sec">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center product-head">
            <h3>Popular Products</h3>
            <h2 class="same-heading">Our Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam
            </p>
          </div>
        </div>
        <div class="row text-center">
          <ProductItem
            img={require("../assets/img/item1.webp").default}
            ratting={"4.0"}
            like={"5.0"}
            title={"This is a first item"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
          />
          <ProductItem
            img={require("../assets/img/item2.webp").default}
            ratting={"4.0"}
            like={"5.0"}
            title={"This is a second item"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
          />
          <ProductItem
            img={require("../assets/img/item3.webp").default}
            ratting={"4.0"}
            like={"5.0"}
            title={"This is a third item"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
          />
          <ProductItem
            img={require("../assets/img/item4.webp").default}
            ratting={"4.0"}
            like={"5.0"}
            title={"This is a fourth item"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
          />
          <ProductItem
            img={require("../assets/img/item5.jfif").default}
            ratting={"4.0"}
            like={"5.0"}
            title={"dsThis is a fifth items"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
          />{" "}
          <ProductItem
            img={require("../assets/img/item-6.webp").default}
            ratting={"4.0"}
            like={"5.0"}
            title={"This is a six item."}
            desc={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
