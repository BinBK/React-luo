import React from 'react'
import styles from '../Footer/Footer.module.css'
export default function Footer() {
  return (
    <div>
         <footer>
        <div className={styles.footerBox}>
          <h1>
            <a href="https://binbk.github.io/">个人博客</a>
          </h1>
        </div>
      </footer>
    </div>
  )
}
