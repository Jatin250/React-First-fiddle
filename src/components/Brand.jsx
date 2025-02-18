const Brand = () => {
  return (
    <div>
      <div className="container-fluid brand_Bg">
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
              BRAND
            </h1>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* container-fluid end */}

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/logo-resize-04-700x466.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img
                src="/src/assets/logo-resize-07-700x466.jpg"
                className="w-100"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/Untitled-design-min.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/flyingsuccer.png" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/rockystar.jpg" className="w-100" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/affaire.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/warehouse.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/openhouse.jpg" className="w-100" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/daddy.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/diable.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/misosexy.png" className="w-100" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/butturroom.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/bougie.jpeg" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/noach.png" className="w-100" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mt-4 ms-4">
              <img src="/src/assets/tickels.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* container end */}
      <br />
    </div>
  );
};

export default Brand;
