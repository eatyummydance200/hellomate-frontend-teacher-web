import type { CSSProperties } from 'react';
import { clsx } from 'clsx';

import styles from './Icon.module.css';

/** Figma: Icons · 20×20 · stroke 1.6 (src/assets/icons/*.svg, color = currentColor) */
export type IconName =
  | 'alert'
  | 'attach'
  | 'bell'
  | 'chat'
  | 'check'
  | 'chevron-down'
  | 'chevron-right'
  | 'clock'
  | 'close'
  | 'doc'
  | 'eye'
  | 'filter'
  | 'grid'
  | 'list'
  | 'lock'
  | 'logout'
  | 'mail'
  | 'megaphone'
  | 'pencil'
  | 'plus'
  | 'refresh'
  | 'search'
  | 'send'
  | 'trash'
  | 'user'
  | 'users';

const sources = import.meta.glob('../../assets/icons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const icons = Object.fromEntries(
  Object.entries(sources).map(([path, svg]) => [
    path.split('/').pop()!.replace('.svg', ''),
    svg,
  ]),
) as Record<IconName, string>;

interface IconProps {
  name: IconName;
  /** px; defaults to --icon-size (20) */
  size?: number;
  className?: string;
  style?: CSSProperties;
}

function Icon({ name, size, className, style }: IconProps) {
  return (
    <span
      className={clsx(styles.icon, className)}
      style={size ? { ...style, width: size, height: size } : style}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
}

export default Icon;
