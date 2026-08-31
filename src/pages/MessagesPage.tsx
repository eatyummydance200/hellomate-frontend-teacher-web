import { useState } from 'react';

import TopBar from '../components/ui/TopBar';
import SearchBox from '../components/ui/SearchBox';
import StudentListRow from '../components/ui/StudentListRow';
import ChatBubble from '../components/ui/ChatBubble';
import Icon from '../components/ui/Icon';
import { students } from '../mock/data';
import styles from './MessagesPage.module.css';

function MessagesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = students.find((s) => s.id === selectedId) ?? null;

  return (
    <>
      <TopBar title="개별 메시지" subtitle="학생과 1:1로 대화하고 문의에 답변하세요" />
      <div className={styles.content}>
        <div className={styles.layout}>
          <div className={styles.studentPane}>
            <div className={styles.searchWrap}>
              <SearchBox placeholder="학생 이름 검색" />
            </div>
            {students.map((s) => (
              <StudentListRow
                key={s.id}
                initial={s.initial}
                name={s.name}
                preview={s.preview}
                time={s.time}
                unread={s.unread}
                active={s.id === selectedId}
                onClick={() => setSelectedId(s.id)}
              />
            ))}
          </div>

          <div className={styles.chatPane}>
            {!selected ? (
              <div className={styles.empty}>
                <span className={styles.emptyIcon}>
                  <Icon name="chat" size={32} />
                </span>
                <p className="t-body-strong">왼쪽 목록에서 학생을 선택해 대화를 시작하세요</p>
                <p className={`${styles.emptyHint} t-caption`}>
                  답변 대기 중인 학생은 이름 옆에 빨간 점으로 표시됩니다
                </p>
              </div>
            ) : (
              <>
                <div className={styles.chatHead}>
                  <span className={styles.avatar}>{selected.initial}</span>
                  <div className={styles.chatHeadText}>
                    <p className="t-heading">{selected.name}</p>
                    <p className={`${styles.chatHeadMeta} t-caption`}>{selected.meta}</p>
                  </div>
                  <button type="button" className={styles.profileBtn}>
                    <span className="t-label">학생 정보</span>
                    <Icon name="chevron-right" size={14} />
                  </button>
                </div>

                <div className={styles.contextStrip}>
                  <span className={`${styles.contextLabel} t-label`}>문의 중인 공지</span>
                  <span className="t-caption">{selected.noticeContext}</span>
                  <Icon name="chevron-right" size={14} />
                </div>

                <div className={styles.chatBody}>
                  {selected.messages.map((m, i) => (
                    <ChatBubble key={i} side={m.side} time={m.time}>
                      {m.text}
                    </ChatBubble>
                  ))}
                </div>

                <div className={styles.inputBar}>
                  <button type="button" className={styles.iconBtn} aria-label="파일 첨부">
                    <Icon name="attach" size={19} />
                  </button>
                  <input className={styles.input} placeholder="메시지를 입력하세요" />
                  <button type="button" className={styles.sendBtn} aria-label="전송">
                    <Icon name="send" size={20} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MessagesPage;
