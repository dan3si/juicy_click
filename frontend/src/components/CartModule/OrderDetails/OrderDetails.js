import React, { useState } from 'react'
import styles from './OrderDetails.module.scss'
import cn from 'classnames'
import apiURL from '../../../data/apiURL'

function OrderDetails({ cartModuleIsOpen, setCartModuleIsOpen, itemsInCart, setItemsInCart, setOrderDetailsIsOpen }) {
  const totalPrice = itemsInCart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const closeOrderDetails = () => setOrderDetailsIsOpen(false)
  const closeCart = () => {
    setCartModuleIsOpen(false)
    setTimeout(closeOrderDetails, 500);
  }
  const clearCart = () => setItemsInCart([])

  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userCity, setUserCity] = useState('')
  const [userPostDepartment, setUserPostDepartment] = useState('')

  const setValidatedPhone = (e) => {
    if (isNaN(e.target.value)) {
      return
    }

    if (e.target.value.length > 10) {
      return
    }

    setUserPhone(e.target.value)
  }

  const setValidatedPostDepartment = (e) => {
    let newValue = e.target.value

    if (isNaN(newValue)) {
      return
    }

    if (+newValue > 999) {
      newValue = 999
    }

    setUserPostDepartment(newValue)
  }

  const createOrder = async () => {
    const order = {
      userFirstName,
      userLastName,
      userPhone,
      userCity,
      userPostDepartment,
      items: itemsInCart.map(({ russianName, quantity }) => ({ title: russianName, quantity })),
      totalPrice
    }

    try {
      const response = await fetch(
        `${apiURL}/createOrder`,
        {
          method: 'POST',
          body: JSON.stringify(order),
          headers: { 'Content-Type': 'application/json' }
        }
      )
      
      if (response.ok) {
        alert('Спасибо! Ваш заказ оформлен')
        closeCart()
        clearCart()
      } else {
        throw new Error('Server did not receive an order')
      }
    } catch (error) {
      alert('Упс! Что-то пошло не так... Заказ не был отправлен')
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      {cartModuleIsOpen && (
        <div
          className={styles.darker}
          onClick={closeCart}
        />
      )}

      <div className={cn(styles.orderDetails, { [styles.cartModuleClosed]: !cartModuleIsOpen })}>
        <div className={styles.orderDetailsHeader}>
          <span>Оформить заказ</span>
          <button
            className={styles.closeCartModuleButton}
            onClick={closeCart}
          >
            <span className={styles.closeIconPart}></span>
            <span className={styles.closeIconPart}></span>
          </button>
        </div>

        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <label className={styles.inputWrapper}>
              Ваше имя:
              <input
                className={styles.input}
                placeholder="Иван"
                value={userFirstName}
                onChange={(e) => setUserFirstName(e.target.value)}
              />
            </label>

            <label className={styles.inputWrapper}>
              Ваша фамилия:
              <input
                className={styles.input}
                placeholder="Иванов"
                value={userLastName}
                onChange={(e) => setUserLastName(e.target.value)}
              />
            </label>

            <label className={styles.inputWrapper}>
              Номер телефона:
              <input
                className={styles.input}
                placeholder="(012) 345 67 89"
                value={userPhone}
                onChange={setValidatedPhone}
              />
            </label>

            <label className={styles.inputWrapper}>
              Город:
              <input
                className={styles.input}
                placeholder="Киев"
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
              />
            </label>

            <label className={styles.inputWrapper}>
              Отделение Новой почты:
              <input
                className={styles.input}
                placeholder="255"
                value={userPostDepartment}
                onChange={setValidatedPostDepartment}
              />
            </label>
          </form>
        </div>

        <div className={styles.orderDetailsFooter}>
          <button
            className={styles.returnToCartButton}
            onClick={closeOrderDetails}
          >
            К корзине
          </button>
          <div className={styles.sendDataWrapper}>
            <div className={styles.totalPrice}>{totalPrice} грн</div>
            <button
              className={styles.sendDataButton}
              onClick={createOrder}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
