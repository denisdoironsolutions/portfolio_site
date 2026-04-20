import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageTitle } from '../hooks/usePageTitle';
import styles from './Contact.module.css';

export default function Contact() {
  usePageTitle('Contact — Denis Doiron');
  useScrollReveal();
  return (
    <>
      <section className="ph">
        <div className="blueprint fine" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow copper">— Contact</span>
          <h1 className="h1 reveal d1">Let's talk.</h1>
          <p className="lead reveal d2">
            Email is the fastest way to reach me. I read everything and respond within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={styles.grid}>
            <div className={`${styles.card} sr`}>
              <div className={styles.eyebrow}>Available for partner engagements</div>
              <a
                className={styles.email}
                href="mailto:denis@denisdoiron.solutions?subject=Partner%20inquiry%20via%20denisdoiron.solutions"
              >
                denis@denisdoiron.solutions
              </a>
              <div className={styles.details}>
                <div className={styles.row}>
                  <span className={styles.k}>Timezone</span>
                  <span>Eastern Time (UTC−5 / −4)</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.k}>Languages</span>
                  <span>English · Français</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.k}>Response</span>
                  <span>Within one business day</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.k}>Engagement</span>
                  <span>Via SAP B1 partners &amp; resellers</span>
                </div>
              </div>
            </div>
            <div className="sr">
              <span className="eyebrow copper">— What helps</span>
              <h2 className="h2" style={{ margin: '18px 0 28px', maxWidth: '16ch' }}>
                A paragraph is enough.
              </h2>
              <div className={styles.note}>
                <p>
                  If you're writing about a partner engagement, the more context in the first email — the customer's industry, the shape of the work, where you'd want me to fit in, timing — the faster I can tell you honestly whether I'm the right resource.
                </p>
                <p>
                  If you're not sure what to send, send it anyway. I'd rather have a rough paragraph than wait for a polished one.
                </p>
              </div>
              <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  className="btn btn-primary"
                  href="mailto:denis@denisdoiron.solutions?subject=Partner%20inquiry%20via%20denisdoiron.solutions"
                >
                  Write an email <span className="btn-arrow">→</span>
                </a>
                <Link className="btn btn-ghost" to="/services">
                  Review the services first
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
