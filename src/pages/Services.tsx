import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageTitle } from '../hooks/usePageTitle';
import ClosingCTA from '../components/ClosingCTA';
import styles from './Services.module.css';

type Duration = 'short' | 'medium' | 'long';
type NumericShapeKey = 'ux' | 'depth' | 'tech';
type ShapeMetric = Record<NumericShapeKey, number> & { duration: Duration };

interface Service {
  id: string;
  num: string;
  heading: string;
  body: string;
  tech: string[];
  ctaLabel: string;
  subject: string;
  shape: ShapeMetric;
  tags: string[];
}

const SVC: Service[] = [
  {
    id: 'implementation',
    num: '01',
    heading: 'Full-lifecycle SAP Business One delivery',
    body: "End-to-end implementations — discovery, requirements, scope, configuration, data migration, UAT, training, go-live, hypercare — as a senior resource on your partner team. Over a hundred of these across twenty-four years, in manufacturing, distribution, and professional services, at scales from small operators to deployments north of 120 users. You get a predictable senior who knows when to push the customer and when to push back on scope creep.",
    tech: [
      'Discovery & process mapping',
      'SOW authoring',
      'Steering-committee management',
      'Configuration & data migration',
      'UAT',
      'Role-based training',
      'Go-live coordination',
      'Hypercare & knowledge transfer',
    ],
    ctaLabel: 'Discuss an implementation',
    subject: 'SAP B1 implementation — partner inquiry',
    shape: { ux: 4, depth: 5, tech: 2, duration: 'long' },
    tags: ['long-engagement', 'greenfield', 'rescue'],
  },
  {
    id: 'sdk',
    num: '02',
    heading: 'Custom SDK addons and integrations',
    body: "When your customer needs SAP Business One to do something it doesn't do out of the box, that's my lane. I build production C# addons against the DI API and UI API, integrate the Service Layer with third-party systems, and maintain a reusable addon template that keeps delivery predictable. You scope it, I build it, you deliver it — which keeps your own dev team free for the projects they already have.",
    tech: [
      'C#',
      '.NET Framework 4.8',
      'DI API',
      'UI API',
      'Service Layer',
      'SQL Server',
      'SAP HANA',
      'Crystal Reports',
      'Microsoft Graph',
      'Authorize.Net',
      'EDI X.12',
    ],
    ctaLabel: 'Scope an SDK project',
    subject: 'SAP B1 SDK — partner inquiry',
    shape: { ux: 2, depth: 3, tech: 5, duration: 'medium' },
    tags: ['addon', 'integration', 'short-engagement'],
  },
  {
    id: 'reporting',
    num: '03',
    heading: 'Reporting, BI and data',
    body: "Twenty years of B1 reporting has given me a wealth of experience extracting and shaping data — across SQL Server and SAP HANA, operational and financial alike. I deliver Crystal Reports end to end, design custom SQL reporting for the visibility your customer actually needs, and — when the reporting story needs more than a static report can offer — I build interactive dashboards.",
    tech: [
      'T-SQL',
      'SAP HANA SQL',
      'Cross-platform queries',
      'Crystal Reports',
      'Service Layer export',
      'Interactive dashboards',
    ],
    ctaLabel: 'Discuss a reporting need',
    subject: 'Reporting — partner inquiry',
    shape: { ux: 3, depth: 2, tech: 4, duration: 'short' },
    tags: ['reporting', 'short-engagement', 'rescue'],
  },
  {
    id: 'cloud',
    num: '04',
    heading: 'Modern stack additions — when the project calls for it',
    body: 'Some customer projects call for more than an ERP change — a cloud-hosted application, a custom web interface, an automated integration that has to scale. When that happens, I bring a full-stack capability: serverless on AWS, React and TypeScript on the front end, and the experience to know when to use these tools and when not to.',
    tech: [
      'AWS (Amplify, Lambda, DynamoDB, Cognito, CDK)',
      'React + TypeScript',
      'Serverless integration',
      'Web UI atop ERP',
    ],
    ctaLabel: 'Discuss a cloud-side need',
    subject: 'Cloud / web project — partner inquiry',
    shape: { ux: 5, depth: 3, tech: 5, duration: 'medium' },
    tags: ['greenfield', 'integration', 'addon'],
  },
];

interface Selection {
  stage: string;
  shape: string;
  need: string;
}

const FIT_QS: Array<{
  id: keyof Selection;
  label: string;
  options: Array<{ val: string; label: string }>;
}> = [
  {
    id: 'stage',
    label: 'What kind of engagement is this?',
    options: [
      { val: 'greenfield', label: 'New SAP Business One implementation' },
      { val: 'rescue', label: 'Rescue or stabilize an existing install' },
      { val: 'addon', label: 'SDK addon or customization' },
      { val: 'reporting', label: 'Reporting, BI, or data' },
    ],
  },
  {
    id: 'shape',
    label: 'What shape of engagement?',
    options: [
      { val: 'long-engagement', label: 'Multi-month delivery' },
      { val: 'short-engagement', label: 'Fixed scope, weeks not months' },
      { val: 'integration', label: 'Third-party integration' },
      { val: 'greenfield', label: 'Greenfield build on a modern stack' },
    ],
  },
  {
    id: 'need',
    label: 'What matters most on this engagement?',
    options: [
      { val: 'depth', label: 'Deep SAP Business One domain experience' },
      { val: 'tech', label: 'Engineering capability (SDK, performance, integration)' },
      { val: 'ux', label: 'Modern web interface on top of B1' },
      { val: 'duration', label: 'A predictable, scoped end date' },
    ],
  },
];

function isNumericShapeKey(key: string): key is NumericShapeKey {
  return key === 'ux' || key === 'depth' || key === 'tech';
}

function score(svc: Service, sel: Selection): number {
  let s = 0;
  if (sel.stage && svc.tags.includes(sel.stage)) s += 3;
  if (sel.shape && svc.tags.includes(sel.shape)) s += 3;
  if (sel.need === 'duration') {
    s +=
      svc.shape.duration === 'short' ? 3 : svc.shape.duration === 'medium' ? 2 : 1;
  } else if (isNumericShapeKey(sel.need)) {
    s += svc.shape[sel.need];
  }
  return s;
}

function FitSelector() {
  const [sel, setSel] = useState<Selection>({
    stage: 'greenfield',
    shape: 'long-engagement',
    need: 'depth',
  });
  const ranked = useMemo(
    () =>
      SVC.map((s) => ({ s, score: score(s, sel) })).sort((a, b) => b.score - a.score),
    [sel]
  );
  const top = ranked[0];
  const maxScore = Math.max(...ranked.map((r) => r.score), 1);

  return (
    <section className={styles.fit}>
      <div className="blueprint" />
      <div className="wrap">
        <div style={{ marginBottom: 48 }}>
          <span className="eyebrow" style={{ color: 'oklch(72% 0.06 48)' }}>
            — Which service fits?
          </span>
        </div>
        <div className={styles.fitGrid}>
          <div className={styles.fitLeft}>
            <h2 className="h2" style={{ margin: '0 0 20px' }}>
              Tell me about the engagement. I'll point you at the right lane.
            </h2>
            <p className="lead">
              Three questions. The recommendation updates live. None of it is binding — consider it a first filter before you write the email.
            </p>
            <div className={styles.fitQuestions} style={{ marginTop: 40 }}>
              {FIT_QS.map((q) => (
                <div key={q.id} className={styles.fitQ}>
                  <div className={styles.qLabel}>{q.label}</div>
                  <div className={styles.qOptions}>
                    {q.options.map((o) => (
                      <button
                        key={o.val}
                        className={`${styles.chip} ${sel[q.id] === o.val ? styles.chipOn : ''}`}
                        onClick={() => setSel((p) => ({ ...p, [q.id]: o.val }))}
                        type="button"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.fitRight}>
            <div className={styles.recommendEyebrow}>
              → Recommended lane · {String(top.s.num).padStart(2, '0')}
            </div>
            <h3>{top.s.heading}</h3>
            <p>{top.s.body.split('.')[0]}.</p>
            <div className={styles.fitMeter}>
              {ranked.map((r) => {
                const pct = r.score / maxScore;
                return (
                  <div key={r.s.id} className={styles.fitMeterRow}>
                    <div style={{ color: r === top ? 'var(--copper)' : undefined }}>
                      {r.s.heading.split(' ').slice(0, 3).join(' ')}
                    </div>
                    <div className={styles.fitBar}>
                      <div
                        className={styles.fitBarFill}
                        style={{ '--pct': pct.toFixed(2) } as CSSProperties}
                      />
                    </div>
                    <div className={styles.fitBarVal}>{Math.round(pct * 100)}</div>
                  </div>
                );
              })}
            </div>
            <a
              className={styles.fitCta}
              href={`mailto:denis@denisdoiron.solutions?subject=${encodeURIComponent(top.s.subject)}`}
            >
              {top.s.ctaLabel} <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  usePageTitle('Services — Denis Doiron');
  useScrollReveal();
  return (
    <>
      <section className="ph">
        <div className="blueprint fine" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow copper">— Services</span>
          <h1 className="h1 reveal d1">What I deliver.</h1>
          <p className="lead reveal d2">
            Four lanes of partner engagement. The first three are the core of the practice. The fourth is what I bring when a project needs more than the ERP itself can do.
          </p>
        </div>
      </section>

      <FitSelector />

      <section className="section">
        <div className="wrap">
          <div
            className="sr"
            style={{
              marginBottom: 32,
              display: 'flex',
              alignItems: 'baseline',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <span className="eyebrow copper">— Full catalogue</span>
            <h2 className="h2" style={{ margin: 0 }}>
              Every lane, in detail.
            </h2>
          </div>
          {SVC.map((s) => (
            <article key={s.id} className={`${styles.svcBlock} sr`} id={s.id}>
              <div className={styles.svcNum}>
                {s.num} / {String(SVC.length).padStart(2, '0')}
              </div>
              <div className={styles.svcBody}>
                {s.id === 'implementation' && (
                  <span
                    className="eyebrow copper"
                    style={{ display: 'block', marginBottom: 12 }}
                  >
                    — Also: rescue work, when the engagement is already in trouble
                  </span>
                )}
                <h3>{s.heading}</h3>
                <p>{s.body}</p>
                <div className={styles.svcTech}>
                  {s.tech.map((t) => (
                    <span key={t} className={styles.pill}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  className={styles.svcCta}
                  href={`mailto:denis@denisdoiron.solutions?subject=${encodeURIComponent(s.subject)}`}
                >
                  {s.ctaLabel} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ClosingCTA
        text={
          <>
            Not sure which fits your project? <em>Send a paragraph.</em> I'll tell you honestly whether I'm the right resource.
          </>
        }
        cta="Send a paragraph"
      />
    </>
  );
}
