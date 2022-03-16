import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import day from 'dayjs';
import { p2w } from '@/utils';
// @ts-ignore
import ReactWaterfall from '@jswork/react-waterfall';
import '@jswork/react-waterfall/dist/style.css';
import Cover from '@/components/Cover';
import { StyleDisplayShape } from '@/models/styleDisplay';
import styles from './index.scss'
const items = [
  { pic: 'https://picsum.photos/id/658/50/50', id: '111', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/653/200/100', id: '222', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/112/300/200', id: '333', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/656/500/200', id: '444', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/115/100/120', id: '555', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/621/100/180', id: '666', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/634/160/120', id: '777', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/101/160/120', id: '888', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/102/160/120', id: '999', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/103/160/120', id: '100', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
  { pic: 'https://picsum.photos/id/658/50/50', id: '1', title: '西游记', tag: '三国', tagImg: 'https://picsum.photos/id/658/50/50' },
];
export default function WaterFall({style}) {
  const [pagedList, setPagedList] = useState(items)
  const handleLikeChange = (item) => {

  }
  const handleItemClick = useCallback((item) => {
    // setPicSrc(item.pic);
    // setShow(true);
  }, []);
  return (
    <div className={styles['style-display-wrapper']} style={{style}}>
      <ReactWaterfall
        column={2}
        items={pagedList || []}
        template={({ item }: { item: StyleDisplayShape }) => (
          <Cover
            key={item.id}
            image={item.pic}
            text={item.title}
            tag={item.tag}
            tagImg={item.tagImg}
            showLike
            liked={item.fag === 1}
            likeCount={item.praiseNum}
            onLikeClick={() => handleLikeChange(item)}
            time={day(item.updateTime).format('YYYY.MM.DD')}
            onImageClick={() => handleItemClick(item)}
            textWrap
            style={{ width: p2w(170) }}
          />
        )}
      />
    </div>
  )
}
