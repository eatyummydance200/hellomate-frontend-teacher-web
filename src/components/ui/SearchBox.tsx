import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import Icon from './Icon';
import styles from './SearchBox.module.css';

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement>;

function SearchBox({ className, ...props }: SearchBoxProps) {
  return (
    <div className={clsx(styles.wrap, className)}>
      <Icon name="search" size={18} className={styles.icon} />
      <input type="search" className={styles.input} {...props} />
    </div>
  );
}

export default SearchBox;
