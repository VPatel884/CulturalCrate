import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  putIncreaseQuantity,
  putDecreaseQuantity,
  deleteCartItem,
  gotoCartToggle,
} from "../features/cartSlice";
import {
  addToWishlist,
  postProductInWishlist,
} from "../features/wishlistSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart.cartArray);

  const decreaseQuantityHandler = (id, product) => {
    // Dispatch to decrease quantity of that product only
    dispatch(decrementQuantity(id));
    dispatch(putDecreaseQuantity(product));
  };

  const increaseQuantityHandler = (id, product) => {
    // Dispatch to increase quantity of that product only
    dispatch(incrementQuantity(id));
    dispatch(putIncreaseQuantity(product));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    dispatch(deleteCartItem(id));
    dispatch(gotoCartToggle({ [id]: false }));

    toast.warning("Product removed from cart");
  };

  // cart price calculation

  const cartTotalPrice = cart.reduce(
    (acc, curr) => acc + curr.productPrice * curr.quantity,
    0
  );

  let totalAmount = 0;
  let discountAmount = 0;
  let deliveryCharges;
  if (cart.length > 0) {
    if (cartTotalPrice >= 2000) {
      deliveryCharges = 0;
      discountAmount = cartTotalPrice * 0.1;
    } else {
      deliveryCharges = 50;
      discountAmount = 200;
    }

    totalAmount = cartTotalPrice - discountAmount + deliveryCharges;
  }

  const handleAddToWishlist = (product) => {
    // dispatch action to add it in wishlist array
    dispatch(addToWishlist({ ...product, quantity: 1 }));
    dispatch(postProductInWishlist(product));
    dispatch(removeFromCart(product._id));
    dispatch(deleteCartItem(product._id));
    toast.success("Product added to wishlist");
  };

  return (
    <>
      <ToastContainer theme="dark" autoClose={1000} />
      <Header />
      <div
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/ecommerce-web-store-hand-drawn-illustration_107791-10966.jpg?t=st=1740117511~exp=1740121111~hmac=8441643817f430377330934626b4001b56d62649d6337f10e234fb8bc34d17c6&w=1380')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <section
            aria-labelledby="heading"
            className="bg-white shadow-lg rounded p-2 mb-2 mt-4 pt-5"
          >
            <div className="d-flex justify-content-around align-items-center gap-3 flex-wrap">
              <h1 className="text-uppercase lato-bold">Shopping Cart</h1>
              {cart.length <= 0 ? (
                <p className="text-danger fs-5">
                  You have {cart.length} items in your shopping cart
                </p>
              ) : (
                <p className="text-success fs-5">
                  You have {cart.length} items in your shopping cart
                </p>
              )}
            </div>
          </section>

          {cart.length === 0 ? (
            // Empty cart message
            <section
              className="bg-white shadow-lg d-flex justify-content-center align-items-center"
              style={{ height: "75vh" }}
            >
              <div className="text-center">
                <h3 className="text-danger">Your cart is empty!</h3>
                <p className="text-secondary">Add items to it now.</p>
                <Link to={"/"} className="btn btn-sm btn-outline-dark mt-3">
                  &#60; Back to Home
                </Link>
              </div>
            </section>
          ) : (
            // Cart content when items exist
            <div className="">
              <div className="row">
                {/* Cart Items Section */}
                <div className="col-12 col-lg-8">
                  <section
                    aria-labelledby="cart-heading"
                    className="bg-white shadow-lg rounded-lg p-4 mb-4"
                  >
                    <ul role="list" className="list-group list-group-flush">
                      {cart.map((product) => (
                        <li className="list-group-item py-6" key={product._id}>
                          <div className="row">
                            <div className="col-3">
                              <img
                                src={product.productImageURL}
                                alt={product.productName}
                                className="img-fluid rounded"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                            <div className="col-9">
                              <h3 className="h5 text-black font-weight-bold">
                                {product.productName}
                              </h3>
                              <div className="d-flex align-items-center">
                                <button
                                  className="btn btn-light btn-sm"
                                  onClick={() =>
                                    decreaseQuantityHandler(
                                      product._id,
                                      product
                                    )
                                  }
                                >
                                  -
                                </button>
                                <span className="mx-1">
                                  {product.quantity || 1}
                                </span>
                                <button
                                  className="btn btn-light btn-sm"
                                  onClick={() =>
                                    increaseQuantityHandler(
                                      product._id,
                                      product
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <div className="mt-4 d-flex align-items-start">
                                <button
                                  className="btn btn-outline-danger"
                                  style={{ width: "158px" }}
                                  onClick={() =>
                                    removeFromCartHandler(product._id)
                                  }
                                >
                                  Remove From Cart
                                </button>
                                <button
                                  onClick={() => handleAddToWishlist(product)}
                                  className="btn btn-outline-dark ms-3"
                                  style={{ width: "158px" }}
                                >
                                  Move to Wishlist
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Price Summary Section */}
                <div className="col-12 col-lg-4">
                  <section
                    aria-labelledby="summary-heading"
                    className="bg-white shadow-lg rounded-md p-4 mb-4"
                  >
                    <h4
                      id="summary-heading"
                      className="text-secondary border-bottom pb-3 mb-3"
                    >
                      Price Details
                    </h4>
                    <dl className="list-group list-group-flush">
                      <div className="list-group-item d-flex justify-content-between">
                        <dt className="text-sm">Price ({cart.length} items)</dt>
                        <dd className="text-sm font-weight-bold">
                          ₹ {cartTotalPrice}
                        </dd>
                      </div>
                      <div className="list-group-item d-flex justify-content-between">
                        <dt className="text-sm">Discount</dt>
                        <dd className="text-sm font-weight-bold text-success">
                          - ₹ {discountAmount}
                        </dd>
                      </div>
                      <div className="list-group-item d-flex justify-content-between">
                        <dt className="text-sm">Delivery Charges</dt>
                        <dd className="text-sm font-weight-bold text-success">
                          {deliveryCharges === 0 ? "Free" : deliveryCharges}
                        </dd>
                      </div>
                      <div className="list-group-item d-flex justify-content-between border-top border-bottom">
                        <dt className="text-base font-weight-bold">
                          Total Amount
                        </dt>
                        <dd className="text-base font-weight-bold">
                          ₹ {totalAmount}
                        </dd>
                      </div>
                    </dl>
                    <div className="px-2 py-4 font-weight-bold text-success">
                      You will save ₹{" "}
                      {isNaN(totalAmount - cartTotalPrice)
                        ? 0
                        : Math.abs(totalAmount -  cartTotalPrice)}{" "}
                      on this order
                    </div>
                    <button className="btn btn-dark w-100 text-uppercase">
                      Place Order
                    </button>
                  </section>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ServiceSection />
      <Footer />
    </>
  );
};

export default Cart;
