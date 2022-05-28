import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import PaymentInputs from "./PaymentInputs";
import { getCartTotal } from "../state/reducer";
import { db } from "../firebase";

function Payment() {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    db.collection("users")
      .doc(state.user?.uid)
      .collection("orders")
      .doc(state.id)
      .set({
        cart: state.cart,
        amount: getCartTotal(state.cart),
        // created: state.created,
      });
    setTimeout(() => {
      navigate("/orders");
      dispatch({
        type: "EMPTY_CART",
      });
    }, "1500");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{state.cart?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__address">
            <p>{state.user?.email}</p>
            <p>123 React Lane</p>
            <p>Dallas, TX</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {state.cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <PaymentInputs setDisabled={setDisabled} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Order Total ({state.cart?.length} items):
                        <strong> {value}</strong>
                      </p>
                      <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order contains a gift
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartTotal(state.cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  disabled={processing || disabled || state.cart.length === 0}
                >
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
