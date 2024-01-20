import React from "react";
import '../Styles/Product.css';


const Product = () => {
  return (
    <>
      <section className="products-comp">
        <div className="common-container">
          <div className="common-heading product-heading">
            <span>Product Collection</span>
            <h2>Discover our products</h2>
          </div>

          <div className="product-grid grid grid-four-col">

            <div className="product-bx product-bx1">
              <div className="prod-img"></div>
              <div className="prod-info">
                <h6>Hello, Sunshine! SPF 35 Sunscreen</h6>
                <span>23 Products</span>
                <div className="prod-link">
                    <a href="#">View Now <i class="fa-solid fa-angle-right"></i></a>
                </div>
              </div>
            </div>


            <div className="product-bx product-bx2">
              <div className="prod-img prod-img2"></div>
              <div className="prod-info">
                <h6>Feel Fresh Bar</h6>
                <span>23 Products</span>
                <div className="prod-link">
                    <a href="#">View Now <i class="fa-solid fa-angle-right"></i></a>
                </div>
              </div>
            </div>


            <div className="product-bx product-bx3">
              <div className="prod-img prod-img3"></div>
              <div className="prod-info">
                <h6>Feel Good Body Scrub</h6>
                <span>23 Products</span>
                <div className="prod-link">
                    <a href="#">View Now <i class="fa-solid fa-angle-right"></i></a>
                </div>
              </div>
            </div>

            <div className="product-bx product-bx4">
              <div className="prod-img prod-img4"></div>
              <div className="prod-info">
                <h6>Sparkle Pendant</h6>
                <span>23 Products</span>
                <div className="prod-link">
                    <a href="#">View Now <i class="fa-solid fa-angle-right"></i></a>
                </div>
              </div>
            </div>


            <div className="product-bx product-bx5">
              <div className="prod-img prod-img5"></div>
              <div className="prod-info">
                <h6>Strut It Shorts</h6>
                <span>23 Products</span>
                <div className="prod-link">
                    <a href="#">View Now <i class="fa-solid fa-angle-right"></i></a>
                </div>
              </div>
            </div>

            <div className="product-bx product-bx6">
              <div className="prod-img prod-img6"></div>
              <div className="prod-info">
                <h6>Strut It Shorts</h6>
                <span>23 Products</span>
                <div className="prod-link">
                    <a href="#">View Now <i class="fa-solid fa-angle-right"></i></a>
                </div>
              </div>
            </div>

            <div className="product-bx product-bx7">
              <div className="prod-img prod-img7"></div>
              <div className="prod-info">
                <h6>Strut It Shorts</h6>
                <span>23 Products</span>
                <div className="prod-link">
                    <a href="#">View Now <i class="fa-solid fa-angle-right"></i></a>
                </div>
              </div>
            </div>

            <div className="product-bx product-bx8">
              <div className="prod-img prod-img8"></div>
              <div className="prod-info">
                <h6>Strut It Shorts</h6>
                <span>23 Products</span>
                <div className="prod-link">
                    <a href="#">View Now <i class="fa-solid fa-angle-right"></i></a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
