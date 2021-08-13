import styles from './ProductCard.module.scss'
import cn from 'classnames'

function ProductCard({
  flavorEnglishName,
  flavorRussianName,
  imageSRC,
  price,
  setCartModuleIsOpen,
  itemsInCart,
  setItemsInCart
}) {
  const cardModifierClass = styles[`productCard--${flavorEnglishName}`]
  const productTitle = `Капсулы для сигарет и стиков Juicy Click ${flavorEnglishName.toUpperCase()} (${flavorRussianName})`

  const addItemToCart = () => {
    const newItem = {
      title: productTitle,
      quantity: 1,
      price,
      image: imageSRC,
      russianName: flavorRussianName
    }

    setItemsInCart(currentItems => [...currentItems, newItem])
  }

  const removeItemFromCart = () => {
    setItemsInCart(currentItems => currentItems.filter(item => item.title !== productTitle))
  }

  const openCart = () => setCartModuleIsOpen(true)

  const isItemInCart = !!itemsInCart.find(item => item.title === productTitle)

  return (
    <div className={cn(styles.productCard, cardModifierClass)}>
      <div className={styles.imageWrapper}>
        <img src={imageSRC} alt="Juicy Click capsule" className={styles.image} />
      </div>

      <h3 className={styles.heading}>{productTitle}</h3>

      <div className={styles.priceBlock}>
        <span className={styles.priceIncription}>Цена:</span>
        <span className={styles.price}>{price} грн</span>
      </div>
  
      <button
        className={styles.buyButton}
        onClick={() => {
          if (isItemInCart) {
            removeItemFromCart()
          } else {
            addItemToCart()
            openCart()
          }
        }}
      >
        {isItemInCart ? 'Убрать из корзины' :  'Купить'}
      </button>
    </div>
  )
}

export default ProductCard
