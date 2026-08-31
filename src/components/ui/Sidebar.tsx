import type { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

import Icon from './Icon';
import styles from './Sidebar.module.css';

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  appName?: string;
  appSubtitle?: string;
  mark?: string;
  user: { initial: string; name: string; role: string };
  onUserMenu?: () => void;
  /** nav content — SidebarNavItem list, optionally grouped with <Sidebar.Label> */
  children: ReactNode;
}

function Sidebar({
  appName = 'HelloMate',
  appSubtitle = '선생님 관리자 콘솔',
  mark = 'H',
  user,
  onUserMenu,
  children,
  className,
  ...props
}: SidebarProps) {
  return (
    <aside className={clsx(styles.sidebar, className)} {...props}>
      <div className={styles.brand}>
        <span className={clsx(styles.mark, 't-title')}>{mark}</span>
        <span className={styles.brandText}>
          <span className={clsx(styles.appName, 't-heading')}>{appName}</span>
          <span className={clsx(styles.appSubtitle, 't-micro')}>{appSubtitle}</span>
        </span>
      </div>

      <nav className={styles.nav}>{children}</nav>

      <div className={styles.spacer} />
      <div className={styles.divider} />

      <div className={styles.user}>
        <span className={clsx(styles.avatar, 't-body-strong')}>{user.initial}</span>
        <span className={styles.userText}>
          <span className={clsx(styles.userName, 't-body-strong')}>{user.name}</span>
          <span className={clsx(styles.userRole, 't-caption')}>{user.role}</span>
        </span>
        <button type="button" className={styles.menu} aria-label="계정 메뉴" onClick={onUserMenu}>
          <Icon name="chevron-down" size={16} />
        </button>
      </div>
    </aside>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className={clsx(styles.groupLabel, 't-micro')}>{children}</p>;
}

Sidebar.Label = Label;

export default Sidebar;
