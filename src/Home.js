import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="458791"
            title="The lean startup"
            price={400.75}
            image="data:image/jpeg;base64,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"
            rating={5}
          />
          <Product
            id="458778"
            title="Kenwood kMix 051 500-Watt Stand Mixer (Raspberry Red)"
            price={400.75}
            image="https://images-na.ssl-images-amazon.com/images/I/41dIhGZ8qWL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="458451"
            title="Samsung Galaxy Fit E 2019, Fitness Band, Pedometer, Heart Rate & Sleep Tracker, PMOLED Display, 5ATM Water Resistance, MIL-STD-810G, Bluetooth Active..."
            price={400.75}
            image="https://images-na.ssl-images-amazon.com/images/I/71C2r560lfL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="452291"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black) "
            price={400.75}
            image="https://images-na.ssl-images-amazon.com/images/I/61XclfIKcbL._SL1000_.jpg"
            rating={4}
          />
          <Product
            id="498791"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
            price={400.75}
            image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="458791"
            title="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black) "
            price={400.75}
            image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
