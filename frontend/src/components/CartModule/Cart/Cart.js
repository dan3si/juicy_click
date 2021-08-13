import styles from './Cart.module.scss'
import cn from 'classnames'
import CartItem from './CartItem'
import cartIcon from '../../../img/icons/cart_icon.svg'

function Cart({ cartModuleIsOpen, setCartModuleIsOpen, itemsInCart, setItemsInCart, setOrderDetailsIsOpen }) {
  const totalPrice = itemsInCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const closeCart = () => setCartModuleIsOpen(false)
  const openCart = () => setCartModuleIsOpen(true)
  const openOrderDetails = () => setOrderDetailsIsOpen(true)

  return (
    <div className={styles.container}>
      {cartModuleIsOpen && (
        <div
          className={styles.darker}
          onClick={closeCart}
        />
      )}
  

      {!cartModuleIsOpen && (
        <button className={styles.cartToggler} onClick={openCart}>
          <img src={cartIcon} className={styles.cartTogglerIcon} alt="cart icon" />
        </button>
      )}

      <div className={cn(styles.cart, { [styles.cartModuleClosed]: !cartModuleIsOpen })}>
        <div className={styles.cartHeader}>
          <span>Корзина</span>
          <button
            className={styles.closeCartModuleButton}
            onClick={closeCart}
          >
            <span className={styles.closeIconPart}></span>
            <span className={styles.closeIconPart}></span>
          </button>
        </div>

        <div className={styles.itemsWrapper}>
          {itemsInCart.length === 0 && 'Корзина пока пуста'}
          {itemsInCart.map(({ title, quantity, price, image }) => (
            <CartItem
              key={title}
              title={title}
              quantity={quantity}
              price={price}
              image={image}
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
            />
          ))}
        </div>

        <div className={styles.cartFooter}>
          <button
            className={styles.continueShoppingButton}
            onClick={closeCart}
          >
            Продолжить покупки
          </button>

          {itemsInCart.length > 0 && (
            <div className={styles.createOrderWrapper}>
              <div className={styles.totalPrice}>{totalPrice} грн</div>
              <button
                className={styles.createOrderButton}
                onClick={openOrderDetails}
              >
                Оформить заказ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
