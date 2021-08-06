import styles from './About.module.scss'

function About() {
  return (
    <article className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>Надоел неприятный запах от сигарет?</h2>
        <ul className={styles.list}>
          <li className={styles.item}>Капсулы Juicy click устраняют неприятный запах и добавляют приятный вкус вашим стикам!</li>
          <li className={styles.item}>Капсулы полностью безопасны, подходят для пользователей IQOS, lil и обычных сигарет</li>
          <li className={styles.item}>Основа сделана из желатина, все ароматизаторы пищевые</li>
          <li className={styles.item}>В упаковке 100 капсул</li>
          <li className={styles.item}>Лимитированная серия вкусов</li>
        </ul>
      </div>
    </article>
  )
}

export default About
