import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Figma: State=Error */
  error?: boolean;
}

function Input({ error = false, className, ...props }: InputProps) {
  return (
    <input
      className={clsx(styles.input, error && styles.error, className)}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}

export default Input;
