import type { TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './Textarea.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

function Textarea({ error = false, className, ...props }: TextareaProps) {
  return (
    <textarea
      className={clsx(styles.textarea, error && styles.error, className)}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}

export default Textarea;
