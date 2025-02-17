import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />

      <div className="container">
        <h2 className="text-center a">
          Welcome to <b style={{ color: "orange" }}>FIRST FIDDLE</b>
        </h2>
        <br />
        <div className="row">
          <div className="col-md-7">
            <p className="b">
              First Fiddle Restaurants, one of India most prominent F&B
              companies in the casual dining sector, is headed by Priyank
              Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso
              Sexy and Bougie in 2022, we have created wave after wave in the
              industry with over 30+ restaurants, brands, and franchises across
              India.
            </p>
            <center>
              <button className="btn btn-warning btn-lg mt-5 mb-3 text-light">
                JOIN THE JOURENY
              </button>
            </center>
          </div>
          <div className="col-md-5 text-center">
            <img src="/src/assets/first.jpg" alt="img123" className="img123" />
          </div>
        </div>
      </div>
      {/* container end */}
      <br />
      <br />
      <br />
      <div className="container-fluid c">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
            <h1 className="text-center aa">MEDIA MENTIONS</h1>
            <p className="d">
              We have been making splashes and headlines since 1999 for our
              innovative concepts and aesthetic ideations, experimental
              gastronomic affairs, and exotic mixology. We have made our way
              from the heart of the country into the hearts of its people!
            </p>
          </div>
          <center>
            <button
              className="btn btn-warning btn-lg mt-5"
              style={{ marginBottom: "2cm" }}
            >
              Know More
            </button>
          </center>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* container-fluid end */}
      <br />
      <br />
      <br />
      <div className="container">
        <h1 className="text-center ex">
          EXPLORE <b style={{ color: "orange" }}>OUR BRANDS</b>
        </h1>
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow mt-4">
              <img src="/src/assets/ffpic1.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow mt-4">
              <img src="/src/assets/ffpic2.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow mt-4">
              <img src="/src/assets/ffpic3.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow mt-4">
              <img src="/src/assets/ffpic4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* container end */}
      <br />
      <br />
      <br />
      <div className="container-fluid cc">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
            <h1 className="text-center aa">EXPERIENCE OUR CONCEPTS</h1>
            <p className="d">
              Moving beyond just offering Indian, international, and fusion
              cuisines, our restaurants create magic with our special events,
              mood-setting music, Insta-worthy aesthetics, and tongue-tingling
              signatures! Head over to experience it for yourself!
            </p>
          </div>
          <center>
            <button
              className="btn btn-warning btn-lg mt-5"
              style={{ marginBottom: "2cm" }}
            >
              Know More
            </button>
          </center>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* container-fluid end */}
    </div>
  );
};

export default Home;
