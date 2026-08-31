import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './StatCard.module.css';

type StatCardTone = 'notice' | 'read' | 'student' | 'message';

interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  /** Figma: Tone — only "message" changes the value color */
  tone?: StatCardTone;
}

function StatCard({ label, value, tone = 'notice', className, ...props }: StatCardProps) {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      <p className={clsx(styles.label, 't-caption')}>{label}</p>
      <p className={clsx(styles.value, 't-numeric', tone === 'message' && styles.alert)}>{value}</p>
    </div>
  );
}

export default StatCard;
