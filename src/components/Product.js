import { useStateValue } from "../state/StateProvider";
import { v4 } from "uuid";

function Product({ title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: v4(),
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
