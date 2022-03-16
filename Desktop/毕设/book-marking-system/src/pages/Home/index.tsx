import React from 'react'
import Header from './Header'
import Bottom from '../../components/Bottom'
import WaterFall from '../WaterFall'
// import styles from './index.scss'
export default function Home() {
  return (
    <>
      <Header></Header>
      <WaterFall style={{marginTop:'50px'}}/>
    </>
  )
}
