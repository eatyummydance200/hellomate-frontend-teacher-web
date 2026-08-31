import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './StudentListRow.module.css';

interface StudentListRowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  initial: string;
  name: string;
  preview: string;
  time: string;
  unread?: boolean;
  /** Figma: State=Active */
  active?: boolean;
}

function StudentListRow({
  initial,
  name,
  preview,
  time,
  unread = false,
  active = false,
  className,
  type = 'button',
  ...props
}: StudentListRowProps) {
  return (
    <button
      type={type}
      className={clsx(styles.row, active && styles.active, className)}
      {...props}
    >
      <span className={clsx(styles.avatar, 't-body-strong')}>{initial}</span>
      <span className={styles.body}>
        <span className={styles.nameRow}>
          <span className={clsx(styles.name, 't-body-strong')}>{name}</span>
          {unread && <span className={styles.dot} />}
        </span>
        <span className={clsx(styles.preview, 't-caption')}>{preview}</span>
      </span>
      <span className={clsx(styles.time, 't-micro')}>{time}</span>
    </button>
  );
}

export default StudentListRow;
