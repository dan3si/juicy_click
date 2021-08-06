import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Promo.module.scss'
import flavors from '../../data/flavors'

function Promo() {
  const [currentFlavor, setCurrentFlavor] = useState(flavors[Math.floor(Math.random() * flavors.length)])

  useEffect(() => {
    setInterval(() => {
      setCurrentFlavor(
        (currentFlavor) => {
          let nextFlavor = flavors.find(flavor => flavor.id === currentFlavor.id + 1)

          if (!nextFlavor) {
            nextFlavor = flavors[0]
          }

          return nextFlavor
        }
      )
    }, 15000);
  }, [])

  return (
    <section className={styles.promo}>
      {flavors.map(
        ({ englishName, id, imageSRC }) => (
          <div
            key={id}
            className={cn(
              styles.background,
              styles[englishName],
              { [styles.active]: id === currentFlavor.id }
            )}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9) ), url(${imageSRC})` }}
          />
        )
      )}

      <h1 className={styles.heading}>
        Капсулы для сигарет и IQOS
        <span className={styles.productName}>Juicy Click</span>
      </h1>
    </section>
  )
}

export default Promo
