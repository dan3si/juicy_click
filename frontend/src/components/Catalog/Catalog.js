import styles from './Catalog.module.scss'
import ProductCard from '../ProductCard'
import flavors from '../../data/flavors'

function Catalog({ setCartModuleIsOpen, itemsInCart, setItemsInCart }) {
  return (
    <main className={styles.catalog} id="catalog">
      <div className={styles.container}>
        {flavors.map(
          ({ id, englishName, russianName, imageSRC, price }) => (
            <ProductCard
              key={id}
              flavorEnglishName={englishName}
              flavorRussianName={russianName}
              imageSRC={imageSRC}
              price={price}
              setCartModuleIsOpen={setCartModuleIsOpen}
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
            />
          )
        )}
      </div>
    </main>
  )
}

export default Catalog
