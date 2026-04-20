import { Fragment } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageTitle } from '../hooks/usePageTitle';
import ClosingCTA from '../components/ClosingCTA';
import styles from './Experience.module.css';

const narrative = [
  "I've been an SAP Business One consultant since 2002. I went freelance in 2007 and have worked as a senior contract resource for SAP Business One partners and resellers ever since.",
  "Over twenty-four years I've delivered more than a hundred full-lifecycle SAP Business One implementations — in manufacturing, distribution, and professional services, at scales from small operators to deployments north of 120 seats — and hundreds of custom solutions and integrations that are still running in production for customers across the globe.",
  'The way I work is what partners bring me in for. I integrate with your team, I follow your methodology, I report to your PM. I scope carefully, deliver in phases, manage the politics of a go-live, and stay through hypercare.',
  "I've also expanded in recent years into modern application work — AWS serverless and React — which I bring to engagements that need a modern interface on top of the ERP, or a cloud integration that has to scale. But the foundation of what I do is SAP Business One partner delivery.",
];

const stats = [
  { n: '100+', l: 'Full-lifecycle implementations' },
  { n: '100s', l: 'Custom solutions & integrations' },
  { n: '24', l: 'Years on SAP Business One' },
  { n: '19', l: 'Years freelance for partners' },
];

const tl = [
  {
    y: '2002',
    t: 'Started as a technical consultant on SAP Business One — the month the product launched in Canada.',
  },
  {
    y: '2004',
    t: 'First full-lifecycle implementation as a lead. Manufacturing. Still running today.',
  },
  {
    y: '2007',
    t: 'Went freelance. Have delivered for SAP Business One partners ever since.',
  },
  {
    y: '2012',
    t: 'Shipped the first reusable SDK addon template. Hundreds of deployments since.',
  },
  {
    y: '2018',
    t: 'Started building modern stacks (React, AWS) on top of B1 for engagements that called for it.',
  },
  {
    y: '2026',
    t: 'Actively supporting customers across the globe; taking on new partner engagements.',
  },
];

const industries = [
  'Manufacturing — food and beverage, chemical, glass, custom woodwork, automotive',
  'Distribution and wholesale',
  'Professional services, including AR and collections-heavy businesses',
  'Custom-order assembly and project-based manufacturing',
];

export default function Experience() {
  usePageTitle('Experience — Denis Doiron');
  useScrollReveal();
  return (
    <>
      <section className="ph">
        <div className="blueprint fine" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow copper">— Experience</span>
          <h1 className="h1 reveal d1">Who I am.</h1>
          <p className="lead reveal d2">
            A senior, individual resource. Twenty-four years on SAP Business One. Freelance since 2007.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={styles.narrativeGrid}>
            <div className="sr">
              <span className="eyebrow copper">— 01 · Narrative</span>
              <h2 className="h2" style={{ margin: '18px 0 0', maxWidth: '14ch' }}>
                Two decades<br />on one product.
              </h2>
            </div>
            <div className="prose sr">
              {narrative.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section band-ink">
        <div className="wrap">
          <div style={{ marginBottom: 56 }}>
            <span className="eyebrow copper">— 02 · By the numbers</span>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.l} className={styles.statCell}>
                <div className={styles.statNum}>{s.n}</div>
                <div className={styles.statLabel}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div
            className="sr"
            style={{
              marginBottom: 48,
              display: 'flex',
              alignItems: 'baseline',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <span className="eyebrow copper">— 03 · Timeline</span>
            <h2 className="h2" style={{ margin: 0 }}>
              Twenty-four years, abridged.
            </h2>
          </div>
          <div className={`${styles.spine} sr`}>
            {tl.map((r) => (
              <Fragment key={r.y}>
                <div className={styles.spineYear}>{r.y}</div>
                <div className={styles.spineBody}>{r.t}</div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-tinted">
        <div className="wrap">
          <div
            className="sr"
            style={{
              marginBottom: 40,
              display: 'flex',
              alignItems: 'baseline',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <span className="eyebrow copper">— 04 · Industries</span>
            <h2 className="h2" style={{ margin: 0 }}>
              Where I've delivered.
            </h2>
          </div>
          <div className={`${styles.indGrid} sr`}>
            {industries.map((t, i) => (
              <div key={i} className={styles.indCell}>
                <div className={styles.indNum}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.indTxt}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
