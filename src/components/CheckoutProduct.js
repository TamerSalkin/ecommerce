import { useStateValue } from "../state/StateProvider";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
  smallImg,
}) {
  const [state, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove From Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
