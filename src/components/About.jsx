const About = () => {
  return (
    <div>
      <div className="container-fluid about_Bg_1">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
            <h1
              className="text-center"
              style={{
                fontSize: "1.5cm",
                marginTop: "4cm",
                fontFamily: "prague",
              }}
            >
              OUR STORY
            </h1>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* container-fluid end */}

      <div className="container">
        <h2 className="about_Heading">
          ONCE UPON <b style={{ color: "orange" }}>AN AFFAIRE</b>
        </h2>
        <br />
        <div className="row">
          <div className="col-md-7">
            <p className="about_Para_1">
              First Fiddle Restaurants, formerly known as The Lazeez Affaire
              Group, was conceived in the year 1999 by Priyank Sukhija and Y.P.
              Ashok. Since then, the company has made a name for itself as
              innovators and leaders in the industry. Starting with their first
              brand, Lazeez Affaire, Priyank popularised the conceptof fine
              dining at a time when the same was unheard of. Following its
              success, First Fiddle introduced the concept of casual dining with
              brands such as Warehouse Cafe, Tamasha, Lord of The Drinks, Flying
              Saucer Cafe, and more, storming Delhi’s nightlife. WIth each new
              brand, First Fiddle brought a concept that was never experienced
              or heard of before, such as Plum by Bent Chair, Miso Sexy, Diablo,
              and more. The restaurants are spread all over India in major
              metropolitan cities like New Delhi, Mumbai, Pune, Lucknow and
              more, with plans to expand internationally soon.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img src="/src/assets/first.jpg" className="w-100" alt="" />
          </div>
        </div>
      </div>
      {/* container end */}
      <br />
      <br />
      <br />
      <div className="container-fluid about_Bg_2">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
            <h1 className="text-center about_Game_Heading">THE GAME CHANGER</h1>
            <p className="about_Para_2">
              The company is dedicated to being a game changer in the F&B
              industry with the introduction of ‘concept’ restaurants. It is
              committed to catering to the ever-changing cosmopolitan taste of
              its customers & customer satisfaction is an utmost priority.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {/* container-fluid end */}
      <br />
      <br />
      <br />
      <div className="container">
        <h1 className="text-center about_Heading_2">
          THE MAN{" "}
          <b style={{ paddingTop: "140px", color: "orange" }} className="our">
            BEHIND THE FIDDLE
          </b>
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow mt-4">
              <img src="/src/assets/about-priyank.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <p className="about_Para_3">
              With over 30 restaurants in 23 years under his belt, the prolific
              restaurateur Priyank Sukhija has become somewhat of a legend in
              the industry, starting his journey at a mere age of 19. Priyank
              was the first in his family to venture into business, hailing from
              a family of lawyers, going on to create an empire in F&B.
              Following his heart and tongue through his F&B career, Priyank has
              successfully created some of the most talked-about brands in the
              industry - Diablo, Lord of the Drinks, Plum by Bent Chair, Lazeez
              Affaire, Tamasha, The Flying Saucer Cafe, and many more.
            </p>
          </div>
        </div>
      </div>
      {/* container end */}
      <br />
      <br />
      <br />
      <div className="container">
        <h2 className="about_Heading">
          JOIN <b style={{ color: "orange" }}>OUR FAMILY</b>
        </h2>
        <br />
        <div className="row">
          <div className="col-md-7">
            <p className="about_Para_1">
              At First Fiddle Restaurants, we leave no stone unturned to provide
              the most desirable experience across markets and restaurants.
              Serving over five lakh customers monthly with 15+ brands and 35+
              restaurants, our brands like Diablo, Plum by Bent Chair, Dragonfly
              Experience, Tamasha, Daddy, JLWA, and more have revolutionized the
              experience of dining & nightlife for everyone. Exploring a
              franchise with First Fiddle Restaurants provides you with a large
              existing customer base besides the added advantage of nation-wide
              recognition.
            </p>
            <h6>
              <button
                className="btn btn-warning btn-lg mt-5 text-light"
                style={{ marginBottom: "2cm" }}
              >
                Franchise With Us
              </button>
            </h6>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/src/assets/333X3322.jpg"
              style={{ width: "90%" }}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* container end */}
      <br />
    </div>
  );
};

export default About;
