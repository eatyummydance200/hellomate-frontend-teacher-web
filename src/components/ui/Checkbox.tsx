import type { ButtonHTMLAttributes, MouseEvent } from 'react';
import { clsx } from 'clsx';

import Icon from './Icon';
import styles from './Checkbox.module.css';

interface CheckboxProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Figma: State=On */
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

function Checkbox({
  checked = false,
  onCheckedChange,
  className,
  type = 'button',
  onClick,
  ...props
}: CheckboxProps) {
  return (
    <button
      type={type}
      role="checkbox"
      aria-checked={checked}
      className={clsx(styles.box, checked && styles.checked, className)}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
        onCheckedChange?.(!checked);
      }}
      {...props}
    >
      {checked && <Icon name="check" size={14} />}
    </button>
  );
}

export default Checkbox;
