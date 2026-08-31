import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './ReadRateBar.module.css';

interface ReadRateBarProps extends HTMLAttributes<HTMLDivElement> {
  /** 0–100 */
  value: number;
  /** overrides the default "{n}%" readout */
  label?: string;
}

function ReadRateBar({ value, label, className, ...props }: ReadRateBarProps) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={clsx(styles.wrap, className)} {...props}>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
      <span className={styles.label}>{label ?? `${Math.round(pct)}%`}</span>
    </div>
  );
}

export default ReadRateBar;
