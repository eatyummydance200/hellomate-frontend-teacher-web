import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Sidebar from '../components/ui/Sidebar';
import SidebarNavItem from '../components/ui/SidebarNavItem';
import { currentUser } from '../mock/data';
import styles from './AppLayout.module.css';

const nav = [
  { to: '/dashboard', icon: 'grid', label: '대시보드' },
  { to: '/compose', icon: 'pencil', label: '새 공지 작성', group: '공지사항' },
  { to: '/sent', icon: 'send', label: '발송함' },
  { to: '/messages', icon: 'chat', label: '개별 메시지', group: '학생', count: 3 },
] as const;

function AppLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.shell}>
      <Sidebar user={currentUser} onUserMenu={() => navigate('/login')}>
        {nav.map((item) => (
          <div key={item.to}>
            {'group' in item && item.group && <Sidebar.Label>{item.group}</Sidebar.Label>}
            <SidebarNavItem
              icon={item.icon}
              label={item.label}
              count={'count' in item ? item.count : undefined}
              active={pathname === item.to}
              href={item.to}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.to);
              }}
            />
          </div>
        ))}
      </Sidebar>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
