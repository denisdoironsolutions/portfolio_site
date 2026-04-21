import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { signatureStories } from '../content/signatureStories';
import styles from './SignatureStoriesHome.module.css';

export default function SignatureStoriesHome() {
  useScrollReveal();

  return (
    <section className="section band-tinted">
      <div className="wrap">
        <div
          className="sr"
          style={{
            marginBottom: 56,
            display: 'flex',
            alignItems: 'baseline',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <span className="eyebrow copper">— 03 · Signature work</span>
          <h2 className="h2" style={{ margin: 0, maxWidth: '24ch' }}>
            Three engagements, three proof-points.
          </h2>
        </div>

        <div className={styles.stack}>
          {signatureStories.map((s) => (
            <article key={s.id} className={`${styles.card} sr`}>
              <div className={styles.cardLeft}>
                <div className={styles.cardNum}>{s.num}</div>
                <div className={styles.cardCategory}>{s.category}</div>
              </div>
              <div className={styles.cardRight}>
                <h3 className={styles.cardHeadline}>{s.problemHeadline}</h3>
                <p className={styles.cardDescriptor}>{s.clientDescriptor}</p>
                <p className={styles.cardBody}>{s.bodyShort}</p>
                <p className={styles.cardOutcome}>{s.outcome}</p>
                <Link to={`/stories#${s.id}`} className={styles.cardLink}>
                  Read the full story <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.allLink} sr`}>
          <Link to="/stories" className="btn btn-ghost">
            See all three stories in depth
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
