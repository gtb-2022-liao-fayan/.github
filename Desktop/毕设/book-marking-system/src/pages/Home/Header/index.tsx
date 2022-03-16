import React, { useState } from 'react'
import styles from './index.scss'
import { history } from 'umi';
import { BiSearch } from 'react-icons/bi';
import clsx from 'clsx';
const headerPlate = ["关注", "发现", "星球"]
export default function Header() {
  const [menuId, setMenuId] = useState(1)
  const searchClick = () => {
    //跳转到搜索页面
    history.push({
      pathname: '/second/civil-construction',
    });
  }
  return (
    <header className={styles.header}>
      <div className={styles.plate}>
        {headerPlate.map((item, idx) => {
          return (
            <span key={idx} className={clsx(styles['menu-item'], {
              [styles['menu-active']]: menuId === idx
            })} onClick={()=>{
              setMenuId(idx)
            }}>
              {item}
              <span className={styles['menu-underline']}></span>
            </span>
          )
        })}
      </div>
      <div className={styles.searchBtn} onClick={searchClick}>
        <BiSearch style={{ fontSize: "20px", color: "#6e6f70" }} />
      </div>

    </header>
  )
}
