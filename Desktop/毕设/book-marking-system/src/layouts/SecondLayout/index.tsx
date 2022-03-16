import React, { PropsWithChildren, useCallback } from 'react';
import { history } from 'umi';
import { Location } from 'history';
import { AiOutlineLeft } from 'react-icons/ai';
import styles from './index.scss';
// import { useCheckLogin } from '../hooks';

export interface SecondLayoutProps {
  location: Location & {
    query: {
      title?: string;
    };
  };
}

export default function BasicLayout({
  location,
  children,
}: PropsWithChildren<SecondLayoutProps>) {
  // const status = useCheckLogin();
  const handleGoBack = useCallback(() => {
    history.goBack();
  }, []);
  return (
    <div className={styles['second-layout']}>
      <header className={styles['second-head']}>
        <span onClick={handleGoBack} className={styles.back}>
          <AiOutlineLeft />
        </span>
        {location.query?.title && <h1>{location.query.title}</h1>}
      </header>
      <div className={styles['second-main']}>{children}</div>
    </div>
  );
}
