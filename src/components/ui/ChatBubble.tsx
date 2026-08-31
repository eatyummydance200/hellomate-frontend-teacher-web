import type { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './ChatBubble.module.css';

interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma: Side */
  side?: 'other' | 'me';
  time?: string;
  children: ReactNode;
}

function ChatBubble({ side = 'other', time, children, className, ...props }: ChatBubbleProps) {
  return (
    <div className={clsx(styles.row, styles[side], className)} {...props}>
      <div className={clsx(styles.bubble, 't-body')}>{children}</div>
      {time && <span className={clsx(styles.time, 't-micro')}>{time}</span>}
    </div>
  );
}

export default ChatBubble;
