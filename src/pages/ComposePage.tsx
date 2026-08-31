import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TopBar from '../components/ui/TopBar';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Chip from '../components/ui/Chip';
import Toggle from '../components/ui/Toggle';
import SegmentedTabs from '../components/ui/SegmentedTabs';
import Icon from '../components/ui/Icon';
import styles from './ComposePage.module.css';

const depts = ['국제교류처', '장학처', '학생처', '기숙사'];
const audiences = ['전체', '부서별', '개별 선택'];

function ComposePage() {
  const navigate = useNavigate();
  const [dept, setDept] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [urgent, setUrgent] = useState(false);
  const [audience, setAudience] = useState(0);

  return (
    <>
      <TopBar title="새 공지 작성" subtitle="학생에게 발송할 공지를 작성하세요" />
      <div className={styles.content}>
        <form
          className={styles.card}
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/sent');
          }}
        >
          <label className={styles.field}>
            <span className="t-body-strong">보내는 부서</span>
            <div className={styles.chips}>
              {depts.map((d, i) => (
                <Chip key={d} selected={dept === i} onClick={() => setDept(i)}>
                  {d}
                </Chip>
              ))}
            </div>
          </label>

          <label className={styles.field}>
            <span className="t-body-strong">제목</span>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="공지 제목을 입력하세요" />
          </label>

          <label className={styles.field}>
            <span className="t-body-strong">내용</span>
            <Textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="공지 내용을 입력하세요" />
          </label>

          <div className={styles.field}>
            <span className="t-body-strong">
              긴급 공지 <span className={`${styles.hint} t-caption`}>중요 공지는 학생 화면 상단에 강조 표시됩니다</span>
            </span>
            <div className={styles.toggleRow}>
              <Toggle checked={urgent} onCheckedChange={setUrgent} />
              <span className="t-caption">이 공지를 긴급 공지로 표시</span>
            </div>
          </div>

          <div className={styles.field}>
            <span className="t-body-strong">첨부파일</span>
            <button type="button" className={styles.attach}>
              <Icon name="attach" size={18} />
              <span className="t-caption">클릭하여 파일 첨부 (PDF, DOCX, 이미지)</span>
            </button>
          </div>

          <div className={styles.field}>
            <span className="t-body-strong">받는 사람</span>
            <SegmentedTabs tabs={audiences} value={audience} onChange={setAudience} />
            <p className={`${styles.audience} t-caption`}>
              전체 등록 유학생 <strong>312명</strong>에게 발송됩니다.
            </p>
          </div>

          <div className={styles.foot}>
            <Button variant="line">임시저장</Button>
            <Button variant="secondary">미리보기</Button>
            <Button type="submit" variant="primary" icon={<Icon name="send" size={18} />}>
              발송하기
            </Button>
          </div>
        </form>

        <aside className={styles.preview}>
          <p className={`${styles.previewLabel} t-caption`}>학생 화면 미리보기</p>
          <div className={styles.phone}>
            <div className={styles.phoneHead}>
              <span className="t-heading">공지사항</span>
              <Icon name="bell" size={18} />
            </div>
            <div className={styles.phoneBody}>
              <div className={styles.noticeCard}>
                <p className={`${styles.noticeMeta} t-micro`}>
                  {urgent ? '긴급 · ' : ''}
                  {depts[dept]} · 방금
                </p>
                <p className="t-body-strong">{title || '공지 제목이 여기에 표시됩니다'}</p>
                <p className={`${styles.noticeText} t-caption`}>
                  {body || '공지 내용이 여기에 표시됩니다.'}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default ComposePage;
