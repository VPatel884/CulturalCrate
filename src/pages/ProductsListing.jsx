import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterSection from "../components/filterSection/FilterSection";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const ProductsListing = () => {
  const paramsObject = useParams();
  const menProducts = useSelector((state) => state.filter.menProducts);
  const womenProducts = useSelector((state) => state.filter.womenProducts);
  const kidsProducts = useSelector((state) => state.filter.kidsProducts);
  // const allProducts = useSelector((state) => state.filter.products);
  const selectedPrice = useSelector((state) => state.filter.selectedPrice);
  const selectedRating = useSelector((state) => state.filter.selectedRating);
  const selectedSort = useSelector((state) => state.filter.selectedSort);
  const searchBoxValue = useSelector((state) => state.filter.searchKeyWord);

  const [allProductsToView, setAllProductsToView] = useState([]);

  useEffect(() => {
    setAllProductsToView([...menProducts, ...womenProducts, ...kidsProducts]);
  }, [menProducts, womenProducts, kidsProducts]);

  const filteredProducts = allProductsToView.filter((product) => {
    const priceFilter = product.productPrice <= selectedPrice;
    const ratingFilter = product.productRating >= selectedRating;
    return priceFilter && ratingFilter;
  });

  // After applying filters I need to sort my filteredProducts array on the basis of price (low to high OR high to low)

  const finalProductsToView =
    selectedSort === "Low to High"
      ? filteredProducts.sort((a, b) => a.productPrice - b.productPrice)
      : selectedSort === "High to Low"
      ? filteredProducts.sort((a, b) => b.productPrice - a.productPrice)
      : filteredProducts;

  // Serach box functionality
  const finalProductView = finalProductsToView.filter((product) =>
    product.productName.toLowerCase().includes(searchBoxValue.toLowerCase())
  );

  return (
    <div className="backgroundColor">
      <Header />

      <section className="text-center" style={{ marginTop: "70px" }}>
        <NavLink style={{ color: "black" }} className="linkDecoration" to={"/"}>
          Home
        </NavLink>{" "}
        /{" "}
        {[
          menProducts.length && "Men",
          womenProducts.length && "Women",
          kidsProducts.length && "Kids",
        ]
          .filter(Boolean)
          .join(" & ")}
      </section>

      {/* <section>
        <h1 className="text-center display-2">Discover Your Signature Style</h1>
        <p className="text-center display-5">
          Elevate your wardrobe with versatile pieces for any mood.
        </p>
      </section> */}

      <section className="row px-2">
        {/* This is for filter section */}
        <section className="col-md-3">
          <FilterSection urlParam={paramsObject.category} />
        </section>

        {/* This section is for product listing  */}
        <section className="col-md-9">
          <CardComponent finalProductsToView={finalProductView} />
        </section>
      </section>

      <footer className="mt-5">
        <Footer />
      </footer>
    </div>
  );
};

export default ProductsListing;
