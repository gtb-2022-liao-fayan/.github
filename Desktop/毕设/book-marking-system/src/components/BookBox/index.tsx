import React, { useEffect } from 'react'
import styles from './index.scss'
export default function BookBox({ bookArr, style }) {
  const listHandle = () => {

  }
  return (
    <div className={styles.boxContainer} style={style} onClick={listHandle}>
      <h2>{bookArr[0]}</h2>
      <ul className={styles.wrapper}>
        {
          bookArr.slice(1).map((item, idx) => {
            return (
              <li key={item.id}>
                <span className={styles.number}>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.score.toFixed(1)}分</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
