import React, { PropsWithChildren, useState, useEffect } from 'react'
import styles from './index.scss'
import Bottom from '@/components/Bottom'
export default function BasicLayout({children}) {
  return (
    <>
      <div className={styles['basic-main']}>{children}</div>
      <Bottom/>
    </>
  )
}
