import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "./OrdersPage.css";
import { Footer } from "../components/Footer";

export  function OrdersPage() {
  return (
    <>
      <title>Orders</title>

      <Header />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          <div className="order-container">
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>August 12</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>$152.36</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
              </div>
            </div>

            <div className="order-details-grid">
              <div className="product-image-container">
                <img src="images/products/Red Bull F1 Hat.jpg" />
              </div>

              <div className="product-details">
                <div className="product-name">
                  Red Bull F1 2024 Hat
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 15
                </div>
                <div className="product-quantity">Quantity: 1</div>
                <button className="buy-again-button button-primary">
                  <img
                    className="buy-again-icon"
                    src="images/icons/buy-again.png"
                  />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <Link to="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </Link>
              </div>

              <div className="product-image-container">
                <img src="images/products/Mercedes F1 Polo Shirt.jpg" />
              </div>

              <div className="product-details">
                <div className="product-name">
                  Mercedes F1 2024 T-shirt (2 pack)
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 19
                </div>
                <div className="product-quantity">Quantity: 2</div>
                <button className="buy-again-button button-primary">
                  <img
                    className="buy-again-icon"
                    src="images/icons/buy-again.png"
                  />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <Link to="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="order-container">
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>June 10</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>$41.90</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>b6b6c212-d30e-4d4a-805d-90b52ce6b37d</div>
              </div>
            </div>

            <div className="order-details-grid">
              <div className="product-image-container">
                <img src="images/products/Max Vesterppen Helmet.jpg" />
              </div>

              <div className="product-details">
                <div className="product-name">Red Bull F1 2024 Helmet</div>
                <div className="product-delivery-date">
                  Arriving on: June 17
                </div>
                <div className="product-quantity">Quantity: 2</div>
                <button className="buy-again-button button-primary">
                  <img
                    className="buy-again-icon"
                    src="images/icons/buy-again.png"
                  />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <Link to="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
