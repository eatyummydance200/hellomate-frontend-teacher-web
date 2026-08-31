import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import Icon, { type IconName } from './Icon';
import styles from './IconButton.module.css';

type IconButtonVariant = 'line' | 'tint';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  variant?: IconButtonVariant;
  /** icon-only button — a label is required for a11y */
  'aria-label': string;
}

function IconButton({
  icon,
  variant = 'line',
  className,
  type = 'button',
  ...props
}: IconButtonProps) {
  return (
    <button type={type} className={clsx(styles.button, styles[variant], className)} {...props}>
      <Icon name={icon} size={18} />
    </button>
  );
}

export default IconButton;
