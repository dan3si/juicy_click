import React, { useState } from 'react'
import styles from './Contacts.module.scss'
import apiURL from '../../data/apiURL'

function Contacts() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMessage, setUserMessage] = useState('')

  const sendContactMessage = async () => {
    const message = {
      userName,
      userEmail,
      userMessage
    }

    try {
      await fetch(
        `${apiURL}/sendContactMessage`,
        {
          method: 'POST',
          body: JSON.stringify(message),
          headers: { 'Content-Type': 'application/json' }
        }
      )

      alert('Ваше сообщение отправлено, спасибо за обращение!')
    } catch {
      alert('Упс! Что-то пошло не так...')
    }
  }

  const resetFormFields = () => {
    setUserName('')
    setUserEmail('')
    setUserMessage('')
  }

  return (
    <div className={styles.contacts} id="contacts">
      <h2 className={styles.heading}>Есть вопрос? Напиши нам!</h2>

      <form className={styles.form}>
        <input
          className={styles.name}
          placeholder="Ваше имя: "
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className={styles.email}
          placeholder="Ваш email: "
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <textarea
          className={styles.message}
          placeholder="Ваше сообщение: "
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />

        <button
          className={styles.submit}
          onClick={(e) => {
            e.preventDefault()
            sendContactMessage()
            resetFormFields()   
          }}
        >
          Отправить
        </button>
      </form>
    </div>
  )
}

export default Contacts
