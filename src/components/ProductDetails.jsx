import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../features/filterSlice";
import {
  addToCart,
  postProductInCart,
  gotoCartToggle,
} from "../features/cartSlice";
import { addToWishlist } from "../features/wishlistSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ServiceSection from "./ServiceSection";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paramsObject = useParams();

  const product = useSelector((state) => state.filter.productDetail);
  const token = useSelector((state) => state.logInRegister.token);

  const handleAddToWishlist = (product) => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(addToWishlist(product));
      dispatch(postProductInWishlist(product));
      toast.success("Product added to wishlist");
    }
  };

  const handleAddToCart = (product) => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
      dispatch(postProductInCart({ ...product, quantity: 1 }));
      toast.success("Product added to cart");
      dispatch(gotoCartToggle({ [product._id]: true }));
    }
  };

  useEffect(() => {
    dispatch(fetchProductDetails(paramsObject.id));
  }, []);

  return (
    <section>
      <ToastContainer theme="dark" autoClose={1000} />

      <Header />
      <section className="mt-5 pt-5">
        <div className="mx-3">
          <div className="row">
            <aside className="col-lg-5 col-xs-6">
              <div className="mb-3 d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src={product?.productImageURL}
                  alt={product?.productName}
                />
              </div>
            </aside>
            <main className="col-lg-6 col-xs-6">
              <div className="">
                <h4 className="text-dark lato-bold fs-3">
                  {product?.productName}
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <span className="ms-1">
                      {" "}
                      {product?.productRating && (
                        <span>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                        </span>
                      )}{" "}
                    </span>
                  </div>
                  <span className="text-muted">154 orders</span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">&#8377; {product?.productPrice}</span>
                </div>

                <p className="lato-light">
                The {product?.productName} embodies sophisticated and modern style, with a focus on clean lines and wearability. It ensures to complements your personal aesthetic, while the fabric guarantees all-day ease.
                </p>

                <p className="lato-light">
                Crafted for {product?.category}, this timelessly stylish piece redefines everyday dressing. Designed to blend seamlessly into your wardrobe, it balances comfort and style for any occasion—whether you’re layering for casual days or elevating your look for moments that matter.
                </p>
                <p className="lato-light">
                A staple for {product?.category} who value  versatility. Pair it with your go-to favorites or let it shine as the standout piece—{product?.productName} adapts to your style, not the other way around.
                </p>
                <b>Shop now and embrace a piece that works as hard as you do.</b>
                <div className="row justify-content-start mt-4">
                  <div className="col-auto">
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className="btn btn-lg btn-outline-dark shadow-0"
                    >
                      <span className="bi bi-heart-fill"></span> Add to wishlist
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-lg btn-outline-dark shadow-0"
                    >
                      <span className="bi bi-cart"> Add to cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <ServiceSection />
      <Footer />
    </section>
  );
};

export default ProductDetails;
