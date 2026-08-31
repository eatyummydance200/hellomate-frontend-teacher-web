import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import Icon from './Icon';
import styles from './StudentPickRow.module.css';

interface StudentPickRowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  initial: string;
  name: string;
  country: string;
  /** Figma: State=On */
  selected?: boolean;
}

function StudentPickRow({
  initial,
  name,
  country,
  selected = false,
  className,
  type = 'button',
  ...props
}: StudentPickRowProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={clsx(styles.row, selected && styles.selected, className)}
      {...props}
    >
      <span className={styles.check}>{selected && <Icon name="check" size={14} />}</span>
      <span className={clsx(styles.avatar, 't-micro')}>{initial}</span>
      <span className={clsx(styles.name, 't-caption')}>{name}</span>
      <span className={clsx(styles.country, 't-micro')}>{country}</span>
    </button>
  );
}

export default StudentPickRow;
