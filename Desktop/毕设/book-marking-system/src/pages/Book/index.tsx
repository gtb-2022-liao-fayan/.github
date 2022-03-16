import React, { useEffect } from 'react'
import BookBox from '@/components/BookBox'
const topWeek = [
  '一周热门图书榜',
  {
    id: 1,
    name: '从零开始的女性主义',
    score: 8.7
  },
  {
    id: 2,
    name: '置身事外',
    score: 9.0
  },
  {
    id: 3,
    name: '也许你该找个人聊聊',
    score: 8.9
  }
]
const top250 = [
  '读书Top250',
  {
    id: 1,
    name: '红楼梦',
    score: 9.6
  },
  {
    id: 2,
    name: '活着',
    score: 9.4
  },
  {
    id: 3,
    name: '百年孤独',
    score: 9.3
  }
]
const popular2021 = [
  '2021最受关注图书热门榜',
  {
    id: 1,
    name: '克拉拉与太阳',
    score: 8.2
  },
  {
    id: 2,
    name: '字母表谜案',
    score: 7.7
  },
  {
    id: 3,
    name: '从零开始的女性主义',
    score: 8.7
  }
]
export default function Book() {
  return (
    <>
      <BookBox bookArr={topWeek} style={{ backgroundColor: '#A68594' }} />
      <BookBox bookArr={top250} style={{ backgroundColor: '#697791' }} />
      <BookBox bookArr={popular2021} style={{ backgroundColor: '#91493F' }} />
    </>
  )
}
