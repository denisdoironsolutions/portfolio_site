import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageTitle } from '../hooks/usePageTitle';
import ClosingCTA from '../components/ClosingCTA';
import { signatureStories } from '../content/signatureStories';
import styles from './Stories.module.css';

// Band rotation: story 0 = default, story 1 = band-tinted, story 2 = band-ink.
const BANDS = ['', 'band-tinted', 'band-ink'] as const;

export default function Stories() {
  usePageTitle('Stories — Denis Doiron');
  useScrollReveal();

  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [hash]);

  return (
    <>
      <section className="ph">
        <div className="blueprint fine" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow copper">— Stories</span>
          <h1 className="h1 reveal d1">Signature work.</h1>
          <p className="lead reveal d2">
            Three engagements. Three proof-points. Each one answered a different question a partner asks before hiring an outside senior resource — can they lead when stakes are high, can they be trusted across time, and can they do work that looks from the outside like it shouldn't be possible.
          </p>
        </div>
      </section>

      {signatureStories.map((s, i) => {
        const band = BANDS[i % BANDS.length];
        return (
          <section
            key={s.id}
            id={s.id}
            className={`section ${band}`.trim()}
          >
            <div className="wrap">
              <div className={styles.storyGrid}>
                <aside className={`${styles.sticky} sr`}>
                  <div className={styles.num}>{s.num}</div>
                  <div className={styles.category}>{s.category}</div>
                  <p className={styles.descriptor}>{s.clientDescriptor}</p>
                  <div className={styles.scaleRow}>{s.scale}</div>
                </aside>
                <div className={styles.storyBody}>
                  <h2 className={`h2 sr ${styles.headline}`}>
                    {s.problemHeadline}
                  </h2>
                  <blockquote className={`${styles.outcome} sr`}>
                    {s.outcome}
                  </blockquote>
                  <div className={`prose ${styles.prose} sr`}>
                    {s.bodyLong.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <ClosingCTA
        text={
          <>
            If your partner engagement sounds like one of these, <em>let's talk.</em>
          </>
        }
      />
    </>
  );
}
