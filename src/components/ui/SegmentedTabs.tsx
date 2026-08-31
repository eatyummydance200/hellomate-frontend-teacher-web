import { clsx } from 'clsx';

import styles from './SegmentedTabs.module.css';

interface SegmentedTabsProps {
  tabs: string[];
  /** index of the active tab */
  value: number;
  onChange: (index: number) => void;
  className?: string;
}

function SegmentedTabs({ tabs, value, onChange, className }: SegmentedTabsProps) {
  return (
    <div role="tablist" className={clsx(styles.root, className)}>
      {tabs.map((tab, i) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={i === value}
          className={clsx(styles.tab, 't-body-strong', i === value && styles.active)}
          onClick={() => onChange(i)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default SegmentedTabs;
