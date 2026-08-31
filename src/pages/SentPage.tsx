import { useNavigate } from 'react-router-dom';

import TopBar from '../components/ui/TopBar';
import SearchBox from '../components/ui/SearchBox';
import Select from '../components/ui/Select';
import SentNoticeRow from '../components/ui/SentNoticeRow';
import { sentNotices } from '../mock/data';
import styles from './SentPage.module.css';

function SentPage() {
  const navigate = useNavigate();

  return (
    <>
      <TopBar
        title="발송함"
        subtitle="발송한 공지의 열람률을 확인하고 다시 보낼 수 있어요"
        ctaLabel="새 공지 작성"
        onCtaClick={() => navigate('/compose')}
      />
      <div className={styles.content}>
        <div className={styles.toolbar}>
          <SearchBox className={styles.search} placeholder="공지 제목 검색" />
          <Select defaultValue="">
            <option value="">전체 부서</option>
            <option>국제교류처</option>
            <option>장학처</option>
            <option>학생처</option>
          </Select>
          <Select defaultValue="30">
            <option value="30">최근 30일</option>
            <option value="90">최근 90일</option>
            <option value="all">전체 기간</option>
          </Select>
        </div>

        <p className={`${styles.count} t-caption`}>
          전체 <strong>128건</strong> · 평균 열람률 <strong>86%</strong>
        </p>

        <div className={styles.list}>
          {sentNotices.map((n) => (
            <SentNoticeRow key={n.title} {...n} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SentPage;
