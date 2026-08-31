import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './Avatar.module.css';

interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  initial: string;
  /** Figma: Size */
  size?: 28 | 36 | 44;
}

function Avatar({ initial, size = 28, className, ...props }: AvatarProps) {
  return (
    <span className={clsx(styles.avatar, styles[`s${size}`], className)} {...props}>
      {initial}
    </span>
  );
}

export default Avatar;
