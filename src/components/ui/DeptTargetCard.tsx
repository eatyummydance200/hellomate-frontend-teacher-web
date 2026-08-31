import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import Icon from './Icon';
import styles from './DeptTargetCard.module.css';

interface DeptTargetCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  count: string;
  /** Figma: State=On */
  selected?: boolean;
}

function DeptTargetCard({
  title,
  count,
  selected = false,
  className,
  type = 'button',
  ...props
}: DeptTargetCardProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={clsx(styles.card, selected && styles.selected, className)}
      {...props}
    >
      <span className={styles.check}>{selected && <Icon name="check" size={14} />}</span>
      <span className={styles.body}>
        <span className={clsx(styles.title, 't-body-strong')}>{title}</span>
        <span className={clsx(styles.count, 't-caption')}>{count}</span>
      </span>
    </button>
  );
}

export default DeptTargetCard;
