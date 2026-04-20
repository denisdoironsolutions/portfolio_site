import type { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './ClosingCTA.module.css';

interface ClosingCTAProps {
  text: ReactNode;
  cta?: string;
  subject?: string;
}

export default function ClosingCTA({
  text,
  cta = 'Start a conversation',
  subject = 'Partner inquiry via denisdoiron.solutions',
}: ClosingCTAProps) {
  useScrollReveal();
  return (
    <section className={`${styles.closing} band-tinted`}>
      <div className="wrap">
        <div className={`${styles.inner} sr`}>
          <span
            className="eyebrow copper"
            style={{ display: 'block', marginBottom: 20 }}
          >
            — Next
          </span>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <a
              className="btn btn-primary"
              href={`mailto:denis@denisdoiron.solutions?subject=${encodeURIComponent(subject)}`}
            >
              {cta} <span className="btn-arrow">→</span>
            </a>
            <span className={styles.meta}>
              ONE-BUSINESS-DAY RESPONSE · EST · EN/FR
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
