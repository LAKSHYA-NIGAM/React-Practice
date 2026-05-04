import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  return (
    <div className={styles.button}>
      <button className={styles.btn}>Print</button>
    </div>
  )
}

export default Button