import React, { useState } from 'react'
import Cart from './Cart'
import OrderDetails from './OrderDetails'

function CartModule({ cartModuleIsOpen, setCartModuleIsOpen, itemsInCart, setItemsInCart }) {
  const [orderDetailsIsOpen, setOrderDetailsIsOpen] = useState(false)

  return orderDetailsIsOpen
    ? <OrderDetails
        cartModuleIsOpen={cartModuleIsOpen}
        setCartModuleIsOpen={setCartModuleIsOpen}
        itemsInCart={itemsInCart}
        setOrderDetailsIsOpen={setOrderDetailsIsOpen}
      />
    : <Cart
        cartModuleIsOpen={cartModuleIsOpen}
        setCartModuleIsOpen={setCartModuleIsOpen}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        setOrderDetailsIsOpen={setOrderDetailsIsOpen}
      />
}

export default CartModule
