import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61XMaqmLaQL._SX1500_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="545665654"
            title="The Lean Startup: How Constant Innovation Creates Radically
            Succesful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking,
             Stylish Kitchen Mixer with K-beater,
            Dough Hook and Whisk, 5 Liter Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="SAMSUNG Gear Fit2 Pro Smartwatch Fitness Band (Large), Liquid Black, SM-R365NZKAXAR"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51Oicwj+hAL._AC_SY741_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61zQN-TujQL._AC_SY450_.jpg"
          />
          <Product
            id="3254354345"
            title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
