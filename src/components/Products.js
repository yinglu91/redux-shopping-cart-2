import React from 'react'
import { useSelector } from 'react-redux'
import { getVisibleProducts } from '../reducers/productsReducer'
import ProductItem from '../components/ProductItem'

// id: PropTypes.number.isRequired,
// title: PropTypes.string.isRequired,
// price: PropTypes.number.isRequired,
// inventory: PropTypes.number.isRequired

const Products = () => {
  const products = useSelector(state => getVisibleProducts(state.products))

  return (  
    <section className="cart">
      <header>
        <h2>Products</h2>
      </header>
    
      <article>
        {products.map(product =>
            <ProductItem
              key={product.id}
              product={product} />
          )}
      </article>
    </section>
  )
}

export default Products
