import React, { useState } from 'react'
import styles from './App.module.scss'
import Header from './components/Header'
import Promo from './components/Promo'
import About from './components/About'
import Using from './components/Using'
import Catalog from './components/Catalog'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import CartModule from './components/CartModule'

function App() {
  const [cartModuleIsOpen, setCartModuleIsOpen] = useState(false)
  const [itemsInCart, setItemsInCart] = useState([])

  return (
    <div className={styles.app}>
      <Header />
      <Promo />
      <About />
      <Using />
      <Catalog
        setCartModuleIsOpen={setCartModuleIsOpen}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
      />
      <Contacts />
      <Footer />
      <CartModule
        cartModuleIsOpen={cartModuleIsOpen}
        setCartModuleIsOpen={setCartModuleIsOpen}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
      />
    </div>
  );
}

export default App;
