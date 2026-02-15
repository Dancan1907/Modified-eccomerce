import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email:supersimple@gmail.com</p>
          <p>Phone: +254 113683038</p>
          <p>Address: Nairobi, Kenya</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/commas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/icons/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} ecommerce-project. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
