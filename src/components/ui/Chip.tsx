import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './Chip.module.css';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: State=On */
  selected?: boolean;
}

function Chip({ selected = false, className, type = 'button', children, ...props }: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={clsx(styles.chip, selected && styles.selected, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Chip;
