import React from 'react'
import styles from './page.module.css'

type Props = {}

const page = (props: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>Left Navbar</div>
        <div className={styles.right}>Right</div>
    </div>
  )
}

export default page