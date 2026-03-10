import { Header } from "../components/Header";
import "./HomePage.css";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <title>Commas Project</title>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          <div className="product-container">
            <div className="product-image-container">
              <img
                className="product-image"
                src="images/products/Mercedes F1 Polo Shirt.jpg"
              />
            </div>

            <div className="product-name limit-text-to-2-lines">
              Mercedes F1 Polo Shirt
            </div>

            <div className="product-rating-container">
              <img
                className="product-rating-stars"
                src="images/ratings/rating-45.png"
              />
              <div className="product-rating-count link-primary">67</div>
            </div>

            <div className="product-price">$78.80</div>

            <div className="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button className="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>

          <div className="product-container">
            <div className="product-image-container">
              <img
                className="product-image"
                src="images/products/Red Bull F1 Polo Shirt.jpg"
              />
            </div>

            <div className="product-name limit-text-to-2-lines">
              Red Bull F1 Polo Shirt
            </div>

            <div className="product-rating-container">
              <img
                className="product-rating-stars"
                src="images/ratings/rating-40.png"
              />
              <div className="product-rating-count link-primary">76</div>
            </div>

            <div className="product-price">$80.95</div>

            <div className="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>  
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button className="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>

          <div className="product-container">
            <div className="product-image-container">
              <img
                className="product-image"
                src="images/products/Max Vesterppen Helmet.jpg"
              />
            </div>

            <div className="product-name limit-text-to-2-lines">
              Max Versterppen f1  2024 Helmet
            </div>

            <div className="product-rating-container">
              <img
                className="product-rating-stars"
                src="images/ratings/rating-40.png"
              />
              <div className="product-rating-count link-primary">75</div>
            </div>

            <div className="product-price">$85.50</div>

            <div className="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button className="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>

          <div className="product-container">
            <div className="product-image-container">
              <img
                className="product-image"
                src="images/products/Max Vesterppen Helmet.jpg"
              />
            </div>

            <div className="product-name limit-text-to-2-lines">
              Max Versterppen f1 2025 Helmet
            </div>

            <div className="product-rating-container">
              <img
                className="product-rating-stars"
                src="images/ratings/rating-40.png"
              />
              <div className="product-rating-count link-primary">75</div>
            </div>

            <div className="product-price">$95.50</div>

            <div className="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button className="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>

          <div className="product-container">
            <div className="product-image-container">
              <img
                className="product-image"
                src="images/products/Red Bull F1 Hat.jpg"
              />
            </div>

            <div className="product-name limit-text-to-2-lines">
              Red Bull F1 Hat
            </div>

            <div className="product-rating-container">
              <img
                className="product-rating-stars"
                src="images/ratings/rating-45.png"
              />
              <div className="product-rating-count link-primary">47</div>
            </div>

            <div className="product-price">$65.99</div>

            <div className="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button className="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
