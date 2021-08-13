import styles from './Using.module.scss'
import usingVideoSRC from '../../video/using.mp4'

function Using() {
  return (
    <div className={styles.using} id="using">
      <h2 className={styles.heading}>Использование</h2>

      <video className={styles.usingVideo} controls="controls">
        <source src={usingVideoSRC} />
      </video>
    </div>
  )
}

export default Using
