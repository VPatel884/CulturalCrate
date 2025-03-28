import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="py-5 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="fs-4 text-light mb-3 lato-regular">
                CulturalCrate
              </div>
              <p>Get the latest and trendiest styled clothings.</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    className="text-light"
                    href="https://github.com/VPatel884"
                    target="_blank"
                    title="GITHUB"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-light"
                    href="https://www.linkedin.com/in/vikash-patel-b767541b7/"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-light mb-3">Shop</h6>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className="text-light text-decoration-none"
                    to={"/products/Women"}
                  >
                    For Women
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-light text-decoration-none"
                    to={"/products/Men"}
                  >
                    For Men
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-light text-decoration-none"
                    to={"/products/Kids"}
                  >
                    For Kids
                  </Link>
                </li>
                <li>
                  <a className="text-light text-decoration-none" href="#">
                    Stores
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-light mb-3">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className="text-light text-decoration-none"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-light text-decoration-none"
                    to="/signup"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-light text-decoration-none"
                    to={"/wishlist"}
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="text-uppercase text-light mb-3">
                Daily Offers &amp; Discounts
              </h6>
              <p className="mb-3">
                Stay updated with our latest deals and discounts!
              </p>
              <form action="#" id="newsletter-form">
                <div className="input-group mb-3">
                  <input
                    className="form-control  border-secondary border-end-0"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <button
                    className="btn btn-outline-secondary border-start-0"
                    type="submit"
                  >
                    <i className="bi bi-send text-light"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 bg-secondary text-light bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                © 2024 CulturalCrate. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end text-dark">
                <li className="list-inline-item">
                  <a href="https://www.visa.co.in/" target="_blank">
                    <img
                      className="img-fluid"
                      style={{ width: "2rem" }}
                      src="	https://yevgenysim-turkey.github.io/shopper/assets/img/payment/visa.svg"
                      alt="Visa"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.mastercard.co.in/en-in.html"
                    target="_blank"
                  >
                    <img
                      className="img-fluid"
                      style={{ width: "2rem" }}
                      src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/mastercard.svg"
                      alt="Mastercard"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.paypal.com/in/home" target="_blank">
                    <img
                      className="img-fluid"
                      style={{ width: "2rem" }}
                      src="	https://yevgenysim-turkey.github.io/shopper/assets/img/payment/paypal.svg"
                      alt="Paypal"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
