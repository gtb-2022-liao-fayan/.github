import React, { useState } from 'react'
import styles from './index.scss'
import clsx from 'clsx';
import WaterFall from '../WaterFall';
import { FiPlus } from 'react-icons/fi'
const handlePlate = ["书评", "评论", "点赞"]
const useInfo1 = {
  name: '遇见!',
  planet: '鬼怪',
}
export default function Mine() {
  const [menuId, setMenuId] = useState(0)
  const [useInfo, setUseInfo] = useState(useInfo1)
  const userImg = 'https://picsum.photos/seed/picsum/200/300'
  return (
    <figure className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.useInfo}>
            <img src={userImg} alt="头像" />
            <button><FiPlus color="black" /></button>
            <div className={styles.useDetail}>
              <span className={styles.userName}>{useInfo.name}</span>
              <span>所属星球：{useInfo.planet}</span>
            </div>
          </div>
          <p>点击这里，填写简介</p>
        </div>
        <div className={styles.data}>
          <div className={styles.dataInfo}>
            <p>
              {31}
              <span>关注</span>
            </p>
            <p>
              {7}
              <span>粉丝</span>
            </p>
            <p>
              {25}
              <span>获赞与收藏</span>
            </p>
          </div>

          <button className={styles.edit}>编辑资料</button>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.plate}>
          {handlePlate.map((item, idx) => {
            return (
              <span key={idx} className={clsx(styles['menu-item'], {
                [styles['menu-active']]: menuId === idx
              })} onClick={() => {
                setMenuId(idx)
              }}>
                {item}
                <span className={styles['menu-underline']}></span>
              </span>
            )
          })}
        </div>
        <WaterFall style={null}/>
      </div>
    </figure>
  )
}
