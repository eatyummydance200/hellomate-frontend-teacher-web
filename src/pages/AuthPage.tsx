import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Checkbox from '../components/ui/Checkbox';
import SegmentedTabs from '../components/ui/SegmentedTabs';
import Icon from '../components/ui/Icon';
import styles from './AuthPage.module.css';

function AuthPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const isLogin = tab === 0;

  return (
    <div className={styles.page}>
      <form
        className={styles.card}
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/dashboard');
        }}
      >
        <div className={styles.brand}>
          <span className={`${styles.mark} t-title`}>H</span>
          <span className={styles.brandText}>
            <span className="t-title">HelloMate</span>
            <span className={`${styles.brandSub} t-caption`}>선생님 관리자 콘솔</span>
          </span>
        </div>

        <SegmentedTabs tabs={['로그인', '회원가입']} value={tab} onChange={setTab} />

        <div className={styles.head}>
          <p className="t-title">{isLogin ? '다시 오신 것을 환영해요' : '선생님 계정 만들기'}</p>
          <p className={`${styles.headSub} t-caption`}>
            {isLogin
              ? '담당 부서 계정으로 로그인해 주세요.'
              : '발급받은 고유키로 본인 확인 후, 이름과 직책을 직접 입력해 주세요.'}
          </p>
        </div>

        <div className={styles.form}>
          {!isLogin && (
            <>
              <label className={styles.field}>
                <span className="t-body-strong">고유키 *</span>
                <Input placeholder="HM-STAFF-XXXX" />
                <span className={`${styles.hint} t-caption`}>
                  담당 부서장 또는 관리자에게 발급받은 고유키를 입력하세요. 1회만 사용할 수 있어요.
                </span>
              </label>
              <label className={styles.field}>
                <span className="t-body-strong">이름 *</span>
                <Input placeholder="홍길동" />
              </label>
              <label className={styles.field}>
                <span className="t-body-strong">직책 *</span>
                <Input placeholder="국제교류처 담당자" />
                <span className={`${styles.hint} t-caption`}>학생에게 보여질 이름과 직책이에요.</span>
              </label>
            </>
          )}

          <label className={styles.field}>
            <span className="t-body-strong">아이디 (이메일){isLogin ? '' : ' *'}</span>
            <Input type="email" placeholder="name@hellomate.ac.kr" />
          </label>

          <label className={styles.field}>
            <span className="t-body-strong">비밀번호{isLogin ? '' : ' *'}</span>
            <span className={styles.pwWrap}>
              <Input type={showPw ? 'text' : 'password'} placeholder="비밀번호 입력" />
              <button
                type="button"
                className={styles.pwToggle}
                aria-label="비밀번호 표시"
                onClick={() => setShowPw((v) => !v)}
              >
                <Icon name="eye" size={18} />
              </button>
            </span>
          </label>

          {isLogin && (
            <div className={styles.optRow}>
              <Checkbox checked={keepLoggedIn} onCheckedChange={setKeepLoggedIn} />
              <span className="t-caption">로그인 상태 유지</span>
              <button type="button" className={`${styles.forgot} t-label`}>
                비밀번호 찾기
              </button>
            </div>
          )}
        </div>

        <Button type="submit" variant="primary" className={styles.submit}>
          {isLogin ? '로그인' : '계정 만들기'}
        </Button>

        <p className={`${styles.note} t-caption`}>
          {isLogin
            ? '데모용 화면입니다. 아이디 / 비밀번호를 임의로 입력해도 로그인됩니다.'
            : '데모용 고유키: HM-STAFF-8841 · HM-STAFF-2295 · HM-STAFF-6603'}
        </p>
      </form>
    </div>
  );
}

export default AuthPage;
