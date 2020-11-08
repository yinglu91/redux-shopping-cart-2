import React from 'react'
import { useDispatch} from 'react-redux'
import { addToCart } from '../actions'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  const {id, img, title, price, quantity, inventory} = product

  return (
    <div className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
      
        <button className="remove-btn"
          onClick={()=> dispatch(addToCart(id))}
          disabled={inventory > 0 ? '' : 'disabled'}>
          {inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>

      </div>

      <div>
      <p className="amount">{inventory > 0 && `In stock:  ${inventory}`}</p>
      </div>
    </div>
  )
}

export default ProductItem
