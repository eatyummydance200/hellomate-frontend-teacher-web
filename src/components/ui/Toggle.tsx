import type { ButtonHTMLAttributes, MouseEvent } from 'react';
import { clsx } from 'clsx';

import styles from './Toggle.module.css';

interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Figma: State=On */
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

function Toggle({
  checked = false,
  onCheckedChange,
  className,
  type = 'button',
  onClick,
  ...props
}: ToggleProps) {
  return (
    <button
      type={type}
      role="switch"
      aria-checked={checked}
      className={clsx(styles.track, checked && styles.on, className)}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
        onCheckedChange?.(!checked);
      }}
      {...props}
    >
      <span className={styles.knob} />
    </button>
  );
}

export default Toggle;
