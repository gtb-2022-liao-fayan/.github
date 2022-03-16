import React, {
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from 'react'
import clsx from 'clsx';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { p2w } from '@/utils';
import styles from './index.scss';

export interface CoverProps {
  image: string;
  tag: string;
  tagImg: string;
  text?: ReactNode;
  extra?: ReactNode;
  time?: ReactNode;
  onClick?: MouseEventHandler;
  onImageClick?: MouseEventHandler;
  imageSize?: {
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
  };
  /**
   * 布局方式
   * @default vertical
   */
  layout?: 'horizontal' | 'vertical';
  style?: CSSProperties;
  showLike?: boolean;
  liked?: boolean;
  likeCount?: number;
  onLikeClick?: () => void;
  /**
   * 默认为false，text只显示一行，溢出部分省略
   * true时，自动换行
   */
  textWrap?: boolean;
}

export default function Cover({
  image,
  tag,
  tagImg,
  imageSize,
  text,
  extra,
  time,
  children,
  onClick,
  onImageClick,
  layout = 'vertical',
  style,
  showLike = false,
  likeCount = 0,
  liked = false,
  onLikeClick,
  textWrap = false,
}: PropsWithChildren<CoverProps>) {
  const [load, setLoad] = useState(false);
  const handleLikeChange = useCallback(
    (e) => {
      e.stopPropagation();
      typeof onLikeClick === 'function' && onLikeClick();
    },
    [onLikeClick],
  );
  const handlePicLoad = useCallback(() => {
    setLoad(true);
  }, []);
  return (
    <figure
      className={clsx(styles['cover-wrapper'], styles[`cover-${layout}`])}
      onClick={onClick}
      style={style}
    >
      <div
        className={styles['cover-image-wrapper']}
        style={{
          width:
            typeof imageSize?.width === 'number'
              ? p2w(imageSize.width)
              : imageSize?.width,
          height:
            typeof imageSize?.height === 'number'
              ? p2w(imageSize.height)
              : imageSize?.height,
        }}
      >
        {image ? (
          <img
            src={image}
            alt="缩略图"
            onLoad={handlePicLoad}
            onClick={onImageClick}
          />
        ) : (
          <div className={styles.empty}>暂无图片</div>
        )}
      </div>
      {(!!text || !!extra || !!time || !!children) && (
        <div className={styles['cover-content']}>
          {!!text && !children && (
            <figcaption
              className={clsx(styles.caption, { [styles.wrap]: textWrap })}
            >
              {text}
            </figcaption>
          )}
          {tag && tagImg && (
            <div className={styles.secondary}>
              <div className={styles.tag}>
                <img src={tagImg} alt="" />
                {tag}
              </div>

              {showLike && load && (
                <div className={styles['like-wrapper']} onClick={handleLikeChange}>
                  <div className={styles['like-shape']}>
                    {liked ? <AiFillHeart fill="#e02020" style={{fontSize:'16px'}}/> : <AiOutlineHeart style={{fontSize:'16px'}}/>}
                  </div>{' '}
                  <span>
                    {
                      likeCount === 0 ? '赞' : likeCount
                    }
                  </span>
                </div>
              )}
            </div>
          )}

          {/* {!!time && !children && (
            <time className={styles.secondary}>{time}</time>
          )}
          {children} */}
        </div>
      )}

    </figure>
  )
}
