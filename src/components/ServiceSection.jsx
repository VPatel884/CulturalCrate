const ServiceSection = () => {
  return (
    <>
      <div className="bg-light text-dark py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center mb-4 mb-lg-0">
              <i className="bi bi-truck me-3 fs-1"></i>
              <div className="service-text">
                <h6 className="text-uppercase fw-bold mb-1">
                  Free shipping &amp; return
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center mb-4 mb-lg-0">
              <i className="bi bi-currency-exchange me-3 fs-1"></i>
              <div className="service-text">
                <h6 className="text-uppercase fw-bold mb-1">
                  15 Days Money back guarantee
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 d-flex align-items-center">
              <i className="bi bi-headset me-3 fs-1"></i>
              <div className="service-text">
                <h6 className="text-uppercase fw-bold mb-1">
                  24/7 Customer Support
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
