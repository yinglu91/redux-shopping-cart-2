import React from "react";
import { useDispatch } from 'react-redux'
import { increase, decrease, remove } from '../actions/cart'

// {
//   id: 1,
//   title: "Samsung Galaxy S7",
//   price: 599.99,
//   img:
//     "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
//   amount: 1
// }

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => dispatch(remove(id))}>remove</button>
      </div>

      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>

        <p className="amount">{amount}</p>

        <button className="amount-btn" onClick={() => dispatch(decrease(id, amount))}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem

