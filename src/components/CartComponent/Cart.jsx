/** @format */

import { FaTrash } from "react-icons/fa";
import { CartWrapper, CartBox } from "./CartStyle";

const Cart = ({showCartComponent}) => {
  return (
    <CartWrapper show={showCartComponent}>
      <CartBox>
        <FaTrash className="trash-icon" />
        <img src="/assets/cart-img-1.png" alt="Melon"/>
        <div>
          <h3>watermelon</h3>
          <span className="price">$4.99/-</span>
          <span className="quantity">qty : 1</span>
        </div>
      </CartBox>
      <CartBox>
        <FaTrash className="trash-icon" />
        <img src="/assets/cart-img-2.png" alt="" />
        <div>
          <h3>onion</h3>
          <span className="price">$4.99/-</span>
          <span className="quantity">qty : 1</span>
        </div>
      </CartBox>
      <CartBox>
        <FaTrash className="trash-icon" />
        <img src="/assets/cart-img-3.png" alt="" />
        <div>
          <h3>chicken</h3>
          <span className="price">$4.99/-</span>
          <span className="quantity">qty : 1</span>
        </div>
      </CartBox>
      <div className="total">total : $19.69/-</div>
      <a href="#" className="btn">
        checkout
      </a>
    </CartWrapper>
  );
};

export default Cart;