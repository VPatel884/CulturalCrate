import { Link } from "react-router-dom";
import {
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
} from "../features/filterSlice";
import { useDispatch } from "react-redux";

const Carousel = () => {
  const dispatch = useDispatch();
  const carouselCategoryHandler = (e) => {
    if (e.target.id === "Men") {
      dispatch(emptyWomenArray([]));
      dispatch(emptyKidsArray([]));
    } else if (e.target.id === "Women") {
      dispatch(emptyMenArray([]));
      dispatch(emptyKidsArray([]));
    } else if (e.target.id === "Kids") {
      dispatch(emptyWomenArray([]));
      dispatch(emptyMenArray([]));
    }
  };
  return (
    <>
      <section className="">
        {/* Circle Slider */}
        <div
          id="carouselExampleIndicators"
          data-bs-ride="carousel"
          data-bs-interval="2000"
          className="carousel slide"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                height: "670px",
                background:
                  "url(https://xyxxcrew.com/cdn/shop/files/mens-nova-combed-cotton-polo-t-shirts-sky-blue-lookshot-1.webp?v=1718795262&width=670) no-repeat right bottom",
              }}
            >
              <div className="d-flex align-items-end h-100 text-white p-5 bg-dark bg-opacity-50">
                <div className="container">
                  <div className="row py-5">
                    <div className="col-lg-6 py-md-5 py-lg-7 ps-5 ">
                      <h5 className="text-uppercase text-muted mb-3 letter-spacing-5">
                        Newly arrived
                      </h5>
                      <h2 className="mb-3 fw-semibold fs-1">
                        Collared T-Shirts
                      </h2>
                      <p className="lead mb-4">
                         Check out our newly arrived collared T-shirt collection with modern comfort for a perfect
                        look.
                      </p>
                      <p>
                        <Link
                          to={"/products/Men"}
                          className="btn btn-outline-dark text-uppercase"
                          id="Men"
                          onClick={carouselCategoryHandler}
                        >
                          View Men collection
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                height: "670px",
                background:
                  "url(https://assets.ajio.com/medias/sys_master/root/20241230/9w1K/67729702c148fa1b306913f4/-473Wx670H-443065278-mauve-MODEL.jpg) no-repeat right bottom /534px",
              }}
            >
              <div className="d-flex align-items-end h-100 text-white p-5 bg-dark bg-opacity-50">
                <div className="container">
                  <div className="row py-5">
                    <div className="col-lg-6 py-md-5 py-lg-7 ps-5">
                      <h5 className="text-uppercase text-muted mb-3 letter-spacing-5">
                        Trending
                      </h5>
                      <h2 className="mb-3 fw-semibold fs-1">
                        Denim coats
                      </h2>

                      <p className="lead mb-4 ">
                        Upgrade your wardrobe with our trendy denim coats and beautify your clothing style.
                      </p>

                      <p>
                        <Link
                          to={"/products/Women"}
                          className="btn btn-outline-dark text-uppercase"
                          id="Women"
                          onClick={carouselCategoryHandler}
                        >
                          View women collection
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                height: "670px",
                background:
                  "url(https://assets.ajio.com/medias/sys_master/root/20230619/0RQ8/64904281d55b7d0c6373ebf3/-1117Wx1400H-466285441-aqua-MODEL.jpg) no-repeat right bottom / 534px",
              }}
            >
              <div className="d-flex align-items-end h-100 text-white p-5 bg-dark bg-opacity-50">
                <div className="container">
                  <div className="row py-5">
                    <div className="col-lg-6 py-md-5 py-lg-7 ps-5">
                      <h5 className="text-uppercase text-muted mb-3 letter-spacing-5">
                        Special
                      </h5>
                      <h2 className="mb-3 fw-semibold fs-1">Ethnic clothes</h2>
                      <p className="lead mb-4">
                        Explore our range of ethnic clothes featuring timeless
                        designs and vibrant colors for your little once, perfect for any occasion.
                      </p>
                      <p>
                        <Link
                          to={"/products/Kids"}
                          className="btn btn-outline-dark text-uppercase"
                          id="Kids"
                          onClick={carouselCategoryHandler}
                        >
                          View kids collection
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* /Circle Slider */}
      </section>
    </>
  );
};

export default Carousel;
