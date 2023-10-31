import React from 'react'
import styles from './GlobalFooter.module.css'

type Props = {}

const GlobalFooter = (props: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>Top</div>
        <div className={styles.bottom}>Bottom</div>
    </div>
  )
}

export default GlobalFooter