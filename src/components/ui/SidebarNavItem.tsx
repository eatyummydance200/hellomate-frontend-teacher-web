import type { AnchorHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import Icon, { type IconName } from './Icon';
import Badge from './Badge';
import styles from './SidebarNavItem.module.css';

interface SidebarNavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconName;
  label: string;
  /** Figma: State=Active */
  active?: boolean;
  count?: number;
}

function SidebarNavItem({
  icon,
  label,
  active = false,
  count,
  className,
  ...props
}: SidebarNavItemProps) {
  return (
    <a
      aria-current={active ? 'page' : undefined}
      className={clsx(styles.item, active && styles.active, className)}
      {...props}
    >
      <Icon name={icon} size={18} />
      <span className={clsx(styles.label, active ? 't-body-strong' : 't-body')}>{label}</span>
      {count != null && <Badge variant="count">{count}</Badge>}
    </a>
  );
}

export default SidebarNavItem;
