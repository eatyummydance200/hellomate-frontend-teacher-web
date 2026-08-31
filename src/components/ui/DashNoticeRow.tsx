import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import ReadRateBar from './ReadRateBar';
import styles from './DashNoticeRow.module.css';

interface DashNoticeRowProps extends HTMLAttributes<HTMLDivElement> {
  initial: string;
  dept: string;
  date: string;
  title: string;
  readRate: number;
}

function DashNoticeRow({
  initial,
  dept,
  date,
  title,
  readRate,
  className,
  ...props
}: DashNoticeRowProps) {
  return (
    <div className={clsx(styles.row, className)} {...props}>
      <span className={clsx(styles.avatar, 't-label')}>{initial}</span>
      <div className={styles.body}>
        <p className={clsx(styles.meta, 't-label')}>
          {dept} · {date}
        </p>
        <p className={clsx(styles.title, 't-body')}>{title}</p>
        <ReadRateBar value={readRate} />
      </div>
    </div>
  );
}

export default DashNoticeRow;
