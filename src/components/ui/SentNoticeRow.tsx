import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import Badge from './Badge';
import IconButton from './IconButton';
import ReadRateBar from './ReadRateBar';
import styles from './SentNoticeRow.module.css';

interface SentNoticeRowProps extends HTMLAttributes<HTMLDivElement> {
  initial: string;
  title: string;
  meta: string;
  readRate: number;
  readLabel?: string;
  urgent?: boolean;
  onResend?: () => void;
  onDelete?: () => void;
}

function SentNoticeRow({
  initial,
  title,
  meta,
  readRate,
  readLabel,
  urgent = false,
  onResend,
  onDelete,
  className,
  ...props
}: SentNoticeRowProps) {
  return (
    <div className={clsx(styles.row, className)} {...props}>
      <span className={clsx(styles.iconBox, 't-body-strong')}>{initial}</span>
      <div className={styles.main}>
        <div className={styles.titleRow}>
          {urgent && <Badge variant="urgent">긴급</Badge>}
          <span className={clsx(styles.title, 't-body-strong')}>{title}</span>
        </div>
        <p className={clsx(styles.meta, 't-caption')}>{meta}</p>
      </div>
      <ReadRateBar className={styles.stat} value={readRate} label={readLabel} />
      <div className={styles.actions}>
        <IconButton icon="refresh" variant="line" aria-label="재발송" onClick={onResend} />
        <IconButton icon="trash" variant="line" aria-label="삭제" onClick={onDelete} />
      </div>
    </div>
  );
}

export default SentNoticeRow;
