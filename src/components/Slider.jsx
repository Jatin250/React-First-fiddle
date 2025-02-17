const Slider = () => {
  return (
    <div>
      <div className="carousel slide" data-bs-ride="carousel" id="abc">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#abc"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#abc"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#abc"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="/src/assets/slider1.jpg" alt="" className="w-100" />
            <div className="carousel-caption"></div>
          </div>
          <div className="carousel-item " data-bs-interval="2000">
            <img src="/src/assets/slider22.jpg" alt="" className="w-100" />
            <div className="carousel-caption"></div>
          </div>
          <div className="carousel-item " data-bs-interval="2000">
            <img src="/src/assets/slider33.jpg" alt="" className="w-100" />
            <div className="carousel-caption"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
