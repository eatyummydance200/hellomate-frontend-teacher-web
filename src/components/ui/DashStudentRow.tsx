import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './DashStudentRow.module.css';

interface DashStudentRowProps extends HTMLAttributes<HTMLDivElement> {
  initial: string;
  name: string;
  preview: string;
  unread?: boolean;
}

function DashStudentRow({
  initial,
  name,
  preview,
  unread = false,
  className,
  ...props
}: DashStudentRowProps) {
  return (
    <div className={clsx(styles.row, className)} {...props}>
      <span className={clsx(styles.avatar, 't-body-strong')}>{initial}</span>
      <div className={styles.body}>
        <p className={clsx(styles.name, 't-body-strong')}>{name}</p>
        <p className={clsx(styles.preview, 't-caption')}>{preview}</p>
      </div>
      {unread && <span className={styles.dot} />}
    </div>
  );
}

export default DashStudentRow;
