import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#about" className={styles.link}>Про нас</a>
        <a href="#using" className={styles.link}>Использование</a>
        <a href="#catalog" className={styles.link}>Заказать</a>
        <a href="#contacts" className={styles.link}>Контакты</a>
      </div>
    </header>
  )
}

export default Header
