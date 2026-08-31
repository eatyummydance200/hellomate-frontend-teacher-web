import type { SelectHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import Icon from './Icon';
import styles from './Select.module.css';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className={clsx(styles.wrap, className)}>
      <select className={styles.select} {...props}>
        {children}
      </select>
      <Icon name="chevron-down" size={16} className={styles.icon} />
    </div>
  );
}

export default Select;
