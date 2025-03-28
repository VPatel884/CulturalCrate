import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
} from "../features/filterSlice";

import Carousel from "./Carousel";
import ServiceSection from "./ServiceSection";

const HeroImageSection = () => {
  const dispatch = useDispatch();

  const categoryHandler = (e) => {
    if (e.target.id === "Men") {
      console.log("Men");
      dispatch(emptyWomenArray([]));
      dispatch(emptyKidsArray([]));
    } else if (e.target.id === "Women") {
      console.log("Women");
      dispatch(emptyMenArray([]));
      dispatch(emptyKidsArray([]));
    } else if (e.target.id === "Kids") {
      console.log("Kids");
      dispatch(emptyWomenArray([]));
      dispatch(emptyMenArray([]));
    }
  };

  return (
    <div>
      <section className="mt-5 mb-5">
        <div className="row gx-0">
          {/* Women Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="card text-white text-center bg-dark bg-opacity-50 d-flex flex-grow-1"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                <h1 className="fw-bold mb-4">Women</h1>
                <Link
                  to={`/products/Women`}
                  className="btn btn-light stretched-link"
                  id="Women"
                  onClick={(e) => categoryHandler(e)}
                >
                  Shop Women <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Men Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="card text-white text-center bg-dark bg-opacity-50 d-flex flex-grow-1"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                <h1 className="fw-bold mb-4">Men</h1>
                <Link
                  to={`/products/Men`}
                  className="btn btn-light stretched-link"
                  id="Men"
                  onClick={(e) => categoryHandler(e)}
                >
                  Shop Men <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Kids Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/funny-ten-year-old-african-boy-white-t-shirt-keeping-clenched-fists-front-him-demonstrating-strength-holding-invisible-objects_343059-4532.jpg?semt=ais_hybrid )",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="card text-white text-center bg-dark bg-opacity-50 d-flex flex-grow-1"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                <h1 className="fw-bold mb-4">Kids</h1>
                <Link
                  to={`/products/Kids`}
                  className="btn btn-light stretched-link"
                  id="Kids"
                  onClick={(e) => categoryHandler(e)}
                >
                  Shop Kids <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carousel />

      {/* <section className="bg-dark mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white text-center  py-5">
              <h2 className="display-4 text-uppercase mb-4">Final Sales</h2>
              <p className="mb-0">Up to</p>
              <h2 className="display-1 fw-bold mb-3">70%</h2>
              <p className="mb-5">* Free shipping on orders over Rs 1000.</p>
              <p>
                <a className="btn btn-outline-light" href="#">
                  Shop Now
                </a>
              </p>
            </div>
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center"
              style={{
                background: `url(https://res.cloudinary.com/dt01fsrbz/image/upload/serrah-galos-494279-unsplash-square_irnatj.jpg) no-repeat right bottom`,
                backgroundSize: "contain",
              }}
            ></div>
          </div>
        </div>
      </section> */}

      <ServiceSection />
    </div>
  );
};

export default HeroImageSection;
