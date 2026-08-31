import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './Badge.module.css';

type BadgeVariant = 'urgent' | 'dept' | 'neutral' | 'count';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Figma: Type */
  variant?: BadgeVariant;
}

function Badge({ variant = 'neutral', className, children, ...props }: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[variant], className)} {...props}>
      {children}
    </span>
  );
}

export default Badge;
