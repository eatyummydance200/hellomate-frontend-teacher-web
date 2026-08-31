import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'line' | 'danger';
type ButtonSize = 'md' | 'sm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
}

function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
