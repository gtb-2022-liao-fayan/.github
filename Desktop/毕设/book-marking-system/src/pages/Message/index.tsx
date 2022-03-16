import React from 'react'
import { AiTwotoneHeart, AiFillMessage } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import clsx from 'clsx';
import styles from './index.scss'
export default function Message() {
  const img = 'https://picsum.photos/id/1025/200/300'
  return (
    <div className={styles.msg}>
      <div className={styles.title}>消息</div>
      <div className={styles.header}>
        <div className={styles.boxWrapper}>
          <span className={styles.box} style={{ backgroundColor: '#faeaea' }}>
            <AiTwotoneHeart fill='#EC6961' size='25px' />
          </span>
          <span>赞和收藏</span>
        </div>
        <div className={styles.boxWrapper}>
          <span className={styles.box} style={{ backgroundColor: '#E8F1FF' }}>
            <BsFillPersonFill fill='#4A86F6' size='25px' />
          </span>
          <span>新增关注</span>
        </div>
        <div className={styles.boxWrapper}>
          <span className={styles.box} style={{ backgroundColor: '#EBFAF3' }}>
            <AiFillMessage fill='#6DD59D' size='25px' />
          </span>
          <span>评论和@</span>
        </div>
      </div>
      <div className={styles.msgContent}>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>
        <div className={styles.userMsg}>
          <img src={img} alt="头像" />
          <div className={styles.user}>
            <span>大白兔奶糖</span>
            <span>好的好的没事</span>
          </div>
          <p>星期五</p>
        </div>

      </div>

    </div>
  )
}
