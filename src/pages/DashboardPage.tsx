import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';

import TopBar from '../components/ui/TopBar';
import StatCard from '../components/ui/StatCard';
import DashNoticeRow from '../components/ui/DashNoticeRow';
import DashStudentRow from '../components/ui/DashStudentRow';
import { dashStats, recentNotices, needReply } from '../mock/data';
import styles from './DashboardPage.module.css';

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <>
      <TopBar
        title="대시보드"
        subtitle="오늘의 공지 발송 현황과 학생 메시지를 한눈에 확인하세요"
        ctaLabel="새 공지 작성"
        onCtaClick={() => navigate('/compose')}
      />
      <div className={styles.content}>
        <div className={styles.statGrid}>
          {dashStats.map((s) => (
            <StatCard key={s.label} label={s.label} value={s.value} tone={s.tone} />
          ))}
        </div>

        <div className={styles.row}>
          <section className={clsx(styles.card, styles.notices)}>
            <header className={styles.cardHead}>
              <h2 className="t-heading">최근 발송한 공지</h2>
              <button type="button" className={clsx(styles.link, 't-label')} onClick={() => navigate('/sent')}>
                전체 보기
              </button>
            </header>
            {recentNotices.map((n) => (
              <DashNoticeRow key={n.title} {...n} />
            ))}
          </section>

          <section className={clsx(styles.card, styles.students)}>
            <header className={styles.cardHead}>
              <h2 className="t-heading">답변이 필요한 학생</h2>
              <button type="button" className={clsx(styles.link, 't-label')} onClick={() => navigate('/messages')}>
                전체 보기
              </button>
            </header>
            {needReply.map((s) => (
              <DashStudentRow key={s.name} {...s} unread />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
