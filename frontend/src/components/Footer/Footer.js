import styles from './Footer.module.scss'
import logo from '../../img/logo.jpg'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoWrapper}>
        <img src={logo} className={styles.logo} alt="Juicy Click Logo" />
      </div>

      <h6 className={styles.copyright}>Juicy Click, 2021 ©</h6>
    </div>
  )
}

export default Footer
