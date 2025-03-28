import { useEffect, useState } from "react";
import Address from "./Address";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import {
  generateToken,
  removeTokenFromRedux,
  removeUserDetails,
} from "../features/logInRegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

const Login = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.logInRegister.token);
  const name = useSelector((state) => state.logInRegister.name);
  const email = useSelector((state) => state.logInRegister.email);

  const [userDetails, setUserDetails] = useState({
    password: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const changeHandler = (e) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const userType = e.nativeEvent.submitter.name;

    if (userType === "signInUser") {
      dispatch(generateToken(userDetails));
      setUserDetails({
        password: "",
        email: "",
      });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("admin-token");
    dispatch(removeTokenFromRedux(null));
    dispatch(removeUserDetails({ name: "", email: "" }));
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  return (
    <section>
      <ToastContainer theme="dark" autoClose={1000} />
      <Header />
      <section
        className="d-flex justify-content-center align-items-center vh-100 bg-light"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/ecommerce-web-store-hand-drawn-illustration_107791-10966.jpg?t=st=1740117511~exp=1740121111~hmac=8441643817f430377330934626b4001b56d62649d6337f10e234fb8bc34d17c6&w=1380')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div
                className="card border-0 rounded-3"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <div className="card-body">
                  {isLoggedIn ? (
                    <>
                      <h2 className="text-center mb-4">Welcome Back!</h2>
                      <div className="text-center">
                        <p className="mb-1">
                          <strong>Name:</strong> {name || "Guest User"}
                        </p>
                        <p className="mb-4">
                          <strong>Email:</strong> {email || "Not Available"}
                        </p>
                      </div>
                      <Address />
                      <button
                        onClick={logoutHandler}
                        className="btn btn-dark w-100 mt-4"
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <h2 className="text-center mb-3">Sign In</h2>
                      <p className="text-center text-muted mb-4">
                      Step into style with seamless access and get personalized picks – Your perfect fit awaits!
                      </p>
                      <form onSubmit={loginHandler}>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="email">
                            Email Address*
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={userDetails.email}
                            onChange={changeHandler}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label" htmlFor="password">
                            Password*
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={userDetails.password}
                            onChange={changeHandler}
                          />
                        </div>

                        <div className="d-grid gap-2">
                          <button
                            type="submit"
                            name="signInUser"
                            className="btn btn-dark text-uppercase"
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                      <p className="text-center mt-3">
                        Don’t have an account? <Link to="/signup">Sign Up</Link>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
