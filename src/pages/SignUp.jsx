import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { signUpUser } from "../features/logInRegisterSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    password: "",
    email: "",
    name: "",
  });

  const changeHandler = (e) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    dispatch(signUpUser(userDetails));
    setUserDetails({
      password: "",
      email: "",
      name: "",
    });
    navigate(`/login`);
  };

  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/ecommerce-web-store-hand-drawn-illustration_107791-10966.jpg?t=st=1740117511~exp=1740121111~hmac=8441643817f430377330934626b4001b56d62649d6337f10e234fb8bc34d17c6&w=1380')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100 justify-content-center">
        
          <div className="col-md-6 col-lg-5">
            <div className="card border-0 rounded mt-4" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
              <div className="card-body p-4">
                <h1 className="card-title text-center">Sign Up</h1>
                <p className="text-center text-muted mb-4">
                  Embark on the CulturalCrate journey! Sign up today and
                  discover a universe of curated traditions, artisan crafts.
                </p>
                <form onSubmit={signUpHandler}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Enter your name*
                    </label>
                    <input
                      name="name"
                      id="name"
                      className="form-control"
                      type="text"
                      onChange={changeHandler}
                      value={userDetails.name}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Enter your email*
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="form-control"
                      type="email"
                      onChange={changeHandler}
                      value={userDetails.email}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="password">
                      Enter your new password*
                    </label>
                    <input
                      name="password"
                      id="password"
                      className="form-control"
                      type="password"
                      onChange={changeHandler}
                      value={userDetails.password}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-dark text-uppercase"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className="text-center mt-3">
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
