const Careers = () => {
  return (
    <div>
      <div className="container-fluid career_Bg">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
            <h1
              className="text-center"
              style={{
                fontSize: "1.5cm",
                marginTop: "4cm",
                fontFamily: "pargue",
              }}
            >
              CAREERS
            </h1>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* container-fluid end */}

      <div className="container">
        <div className="row">
          <div
            className="col-md-12 mb-1 mt-5 text-center"
            style={{
              letterSpacing: "2px",
              fontSize: "1.2cm",
              fontFamily: "pargue",
            }}
          >
            <p>
              COME WORK <b style={{ color: "orange" }}>WITH US!</b>
            </p>
          </div>
          <p className="career_Para">
            First Fiddle is all about innovation, creativity and understanding
            ever-changing consumer needs. The work environment enables both
            professional and personal growth.
          </p>
        </div>
      </div>
      {/* container end */}

      <div className="container">
        <div className="row">
          <div
            className="col-md-12 mb-1 mt-5 text-center"
            style={{
              letterSpacing: "2px",
              fontSize: "1.2cm",
              fontFamily: "pargue",
            }}
          >
            <p>
              HOW TO <b style={{ color: "orange" }}>APPLY!</b>
            </p>
          </div>
          <p className="career_Para">
            First Fiddle is all about innovation, creativity and understanding
            ever-changing consumer needs. The work environment enables both
            professional and personal growth.
          </p>
        </div>
      </div>
      {/* container end */}

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5 mt-3 ms-3">
            <h4 className="mt-5 mb-1" style={{ fontWeight: "400" }}>
              Steep learning curve
            </h4>
            <p className="career_Para">
              Talent and merit are rewarded at First Fiddle Restaurants. Add
              value, and see yourself grow!
            </p>
            <h4 className="mt-5 mb-1" style={{ fontWeight: "400" }}>
              Growth opportunities
            </h4>
            <p className="career_Para">
              Talent and merit are rewarded at First Fiddle Restaurants. Add
              value, and see yourself grow!
            </p>
            <h4 className="mt-5 mb-1" style={{ fontWeight: "400" }}>
              Exciting work environment
            </h4>
            <p className="career_Para">
              Work in a highly motivated environment with talented people. A
              positive work environment, ensures a productive and happy you.
            </p>
          </div>
          <div className="col-md-6 mb-5 ms-1">
            <div className="card" style={{ boxShadow: "1px 1px 12px #020001" }}>
              <h5 className="mt-2 ms-4" style={{ fontWeight: "400" }}>
                Share your Details
              </h5>
              <div className="card-body">
                <form action="">
                  <div className="mb-4">
                    <label htmlFor="" className="mb-2">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="" className="mb-2">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="" className="mb-2">
                      Your Phone:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="" className="mb-2">
                      Message
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Message"
                    />
                  </div>
                  <div>
                    <button className="btn btn-warning btn-lg text-light">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container end */}
    </div>
  );
};

export default Careers;
