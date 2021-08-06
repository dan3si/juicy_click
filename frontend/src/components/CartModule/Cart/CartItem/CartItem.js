import styles from './CartItem.module.scss'
import deleteIcon from '../../../../img/icons/delete_icon.svg'

function CartItem({ title, quantity, price, image, itemsInCart, setItemsInCart }) {
  const changeQuantity = (newQuantity) => {
    if (isNaN(newQuantity)) {
      return
    }

    if (newQuantity < 1) {
      newQuantity = 1
    }

    if (newQuantity > 9999) {
      newQuantity = 9999
    }

    const itemInCart = itemsInCart.find(item => item.title === title)
    itemInCart.quantity = newQuantity

    setItemsInCart(prevItems => [...prevItems])
  }

  const removeItemFromCart = () => {
    setItemsInCart(currentItems => currentItems.filter(item => item.title !== title))
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemWrapper}>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} alt="Juicy Click capsule"></img>
        </div>

        <div className={styles.productTitle}>{title}</div>
      </div>

      <div className={styles.actionsWrapper}>
        <div className={styles.actionsTopRow}>
          <button
            className={styles.deleteItemButton}
            onClick={removeItemFromCart}
          >
            <img src={deleteIcon} height="20" width="20" alt="delete icon" />
          </button>
        </div>

        <div className={styles.actionsBottomRow}>
          <div className={styles.quantityWrapper}>
            <button
              className={styles.changeQuantityButton}
              onClick={() => changeQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              <span className={styles.minusIcon}></span>
            </button>

            <input className={styles.quantityInput} value={quantity} onChange={(e) => changeQuantity(Number(e.target.value))} />

            <button
              className={styles.changeQuantityButton}
              onClick={() => changeQuantity(quantity + 1)}
            >
              <span className={styles.plusIconPart}></span>
              <span className={styles.plusIconPart}></span>
            </button>
          </div>

          <div className={styles.price}>
            {price * quantity} грн
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
