import React, { useState, PropsWithChildren, useEffect } from 'react'
import { history } from 'umi';
import styles from './index.scss'
import { AiOutlinePlus } from 'react-icons/ai'
export default function Bottom() {
  const bottomMenu = ["首页", "图书", " ", "消息", "我"]
  const [menuId, setMenuId] = useState(0)
  useEffect(() => {
    if (location.pathname.includes('/basic/home')) {
      setMenuId(0)
    }
    if (location.pathname.includes('/second/book')) {
      setMenuId(1)
    }
    if (location.pathname.includes('/basic/msg')) {
      setMenuId(3)
    }
    if (location.pathname.includes('/basic/mine')) {
      setMenuId(4)
    }

  }, [location.pathname])
  return (
    <div className={styles['bottom-menu']}>
      <span className={menuId === 0 ? styles['active'] : null} onClick={() => {
        setMenuId(0)
        history.push({
          pathname: '/basic/home',
        });
      }}>{bottomMenu[0]}</span>
      <span className={menuId === 1 ? styles['active'] : null} onClick={() => {
        setMenuId(1);
        history.push({
          pathname: '/second/book',
          query: { title: '榜单' },
        });
      }}>{bottomMenu[1]}</span>
      <span className={styles.plusSpan} onClick={() => { setMenuId(2) }}>
        <div className={styles.plusBg}>
          <AiOutlinePlus className={styles['plus-icon']} />
        </div>

      </span>
      <span className={menuId === 3 ? styles['active'] : null} onClick={() => {
        setMenuId(3)
        history.push({
          pathname: '/basic/msg',
        });
      }}>{bottomMenu[3]}</span>
      <span className={menuId === 4 ? styles['active'] : null} onClick={() => {
        setMenuId(4)
        history.push({
          pathname: '/basic/mine',
        });
      }}>{bottomMenu[4]}</span>
    </div>
  )
}
