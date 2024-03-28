import styles from "./Cart.module.css";
import Header from "../components/header/Header";
import React, { useState } from "react";
function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Trendy Shirt", price: 25, quantity: 2 },
    { id: 2, name: "Stylish Jeans", price: 40, quantity: 1 },
    { id: 3, name: "Electronics Gadget", price: 100, quantity: 1 },
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className={styles.ContainerBox}>
        <div className={styles.container}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p className={styles.emptyCart}>Your cart is empty</p>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemDetails}>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemPrice}>${item.price}</p>
                    </div>
                    <div className={styles.itemActions}>
                      <button
                        className={styles.removeButton}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                      <p className={styles.itemQuantity}>
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.total}>
                <p>Total: ${totalPrice}</p>
                <button className={styles.checkoutButton}>
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
