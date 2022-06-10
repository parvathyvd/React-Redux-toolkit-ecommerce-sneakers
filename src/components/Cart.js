import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cart from "../images/icon-cart.svg";
import person from "../images/image-avatar.png";
import { showTotal, deleteAll } from "../features/cart/cartSlice";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";

const Cart = () => {
  const { amount, total, price, addCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const onCartClick = () => {
    setShowCart(!showCart);
  };

  const onDeleteClick = () => {
    dispatch(deleteAll());
  };
  useEffect(() => {
    dispatch(showTotal());
  }, [amount]);
  return (
    <>
      <div className="cart-profile">
        <img
          className="cart"
          src={cart}
          alt="cart"
          onClick={() => onCartClick()}
        />
        {amount !== 0 && addCart && <span className="amount">{amount}</span>}
        {showCart && (
          <div className="cart-modal">
            <p className="cart-text">Cart</p>
            <span className="line">&nbsp;</span>
            {showCart && amount !== 0 ? (
              <>
                <div className="cart-desc">
                  <div className="cart-desc-img">
                    <img className="cart-desc-thumb" src={thumb1} alt="shoes" />
                  </div>
                  <div className="cart-info">
                    <p>
                      Fall Limited Edition Sneakers
                      <br />${price.toFixed(2)} x {amount} ${total.toFixed(2)}
                    </p>
                  </div>
                  <div className="del-icon">
                    <img
                      src={deleteIcon}
                      alt="Delete Icon"
                      onClick={() => onDeleteClick()}
                    />
                  </div>
                </div>
                <button className="add-checkout">Checkout</button>
              </>
            ) : (
              <p className="empty">Your Cart is empty.</p>
            )}
          </div>
        )}
        <img className="person" src={person} alt="profile" />
      </div>
    </>
  );
};

export default Cart;
