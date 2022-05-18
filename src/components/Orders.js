import { useState, useEffect } from "react";
import { db } from "../firebase";
import { useStateValue } from "../state/StateProvider";
import Order from "./Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    if (state.user) {
      db.collection("users")
        .doc(state.user?.uid)
        .collection("orders")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [state.user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
