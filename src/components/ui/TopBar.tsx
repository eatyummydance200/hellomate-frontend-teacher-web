import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import Button from './Button';
import Icon from './Icon';
import styles from './TopBar.module.css';

interface TopBarProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  onBellClick?: () => void;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

function TopBar({
  title,
  subtitle,
  onBellClick,
  ctaLabel,
  onCtaClick,
  className,
  ...props
}: TopBarProps) {
  return (
    <header className={clsx(styles.bar, className)} {...props}>
      <div className={styles.titleBlock}>
        <p className={clsx(styles.title, 't-title')}>{title}</p>
        {subtitle && <p className={clsx(styles.subtitle, 't-caption')}>{subtitle}</p>}
      </div>
      <button type="button" className={styles.bell} aria-label="알림" onClick={onBellClick}>
        <Icon name="bell" size={20} />
      </button>
      {ctaLabel && (
        <Button variant="primary" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      )}
    </header>
  );
}

export default TopBar;
