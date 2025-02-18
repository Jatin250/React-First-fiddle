const OurTeam = () => {
  return (
    <div>
      <div className="container-fluid our_Team_Bg">
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
              MEET THE TEAM
            </h1>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* conatainer fluid end */}

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-5 mt-4">
            <img
              src="/src/assets/priyank-our team.jpg"
              className="w-100"
              style={{ height: "13.49cm" }}
              alt=""
            />
          </div>
          <div className="col-md-7">
            <h2 className="mt-4">Priyank Sukhija</h2>
            <h6>C.E.O. & M.D.</h6>
            <p className="our_Team_Para">
              A 19-year-old dropout kid, who was just setting up his first
              venture, envisioned what nobody thought would make him a business
              tycoon in the hospitality industry. Once he began, there was no
              stopping this entrepreneur from reaching the heights he has
              reached today. It is the passion and creative streak of Priyank
              Sukhija that has made him the most watched-out restaurateur of
              today’s time. Coming from a family of lawyers, he ventured into
              the business world on his own with Lazeez Affaire in 1999 and has
              never looked back since.
            </p>
            <button className="btn btn-warning btn-lg mb-3 text-white">
              Raed More
            </button>
            <div className="row">
              <div className="col-md-6 mb-5">
                <a href="#">
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "orange", fontSize: "40px" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-brands fa-twitter"
                    style={{
                      color: "orange",
                      fontSize: "40px",
                      marginLeft: "3px",
                    }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa-brands fa-instagram"
                    style={{
                      color: "orange",
                      fontSize: "40px",
                      marginLeft: "3px",
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow ms-2 mb-4 photo1">
                <h4
                  className="text-center text-white"
                  style={{ paddingTop: "7cm" }}
                >
                  Y. P. ASHOK
                </h4>
                <p className="text-center text-white">chairman</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow ms-2 mb-4 photo2">
                <h4
                  className="text-center text-white"
                  style={{ paddingTop: "7cm" }}
                >
                  B.R. SACHDEVA
                </h4>
                <p className="text-center text-white">
                  Director Finance & Legal
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow ms-2 mb-4 photo3">
                <h4
                  className="text-center text-white"
                  style={{ paddingTop: "7cm" }}
                >
                  SAGAR BAJAJ
                </h4>
                <p className="text-center text-white">Corporate Chef</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow ms-2 mb-4 photo4">
                <h4
                  className="text-center text-white"
                  style={{ paddingTop: "7cm" }}
                >
                  JAY SHANKAR NATRAJ
                </h4>
                <p className="text-center text-white">Franchise Lead</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow ms-2 mb-4 photo5">
                <h4
                  className="text-center text-white"
                  style={{ paddingTop: "7cm" }}
                >
                  VIBHUTI SOOD
                </h4>
                <p className="text-center text-white">
                  PR And Communications Head
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container end */}
      <br />
    </div>
  );
};

export default OurTeam;
