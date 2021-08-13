import styles from './Header.module.scss'

function Header() {
  const scrollToBlock = (selector) => document.querySelector(selector).scrollIntoView()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.linkList}>
          <li className={styles.link} onClick={() => scrollToBlock('#about')}>Про нас</li>
          <li className={styles.link} onClick={() => scrollToBlock('#using')}>Использование</li>
          <li className={styles.link} onClick={() => scrollToBlock('#catalog')}>Заказать</li>
          <li className={styles.link} onClick={() => scrollToBlock('#contacts')}>Контакты</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
