/* Services page */

const { useState: svcUS, useMemo: svcUM } = React;

const SVC = [
  {
    id: 'implementation',
    num: '01',
    heading: 'Full-lifecycle SAP Business One delivery',
    body: "End-to-end implementations — discovery, requirements, scope, configuration, data migration, UAT, training, go-live, hypercare — as a senior resource on your partner team. Over a hundred of these across twenty-four years, in manufacturing, distribution, and professional services, at scales from small operators to deployments north of 120 users. You get a predictable senior who knows when to push the customer and when to push back on scope creep.",
    tech: ['Discovery & process mapping', 'SOW authoring', 'Steering-committee management', 'Configuration & data migration', 'UAT', 'Role-based training', 'Go-live coordination', 'Hypercare & knowledge transfer'],
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
    tech: ['C#', '.NET Framework 4.8', 'DI API', 'UI API', 'Service Layer', 'SQL Server', 'SAP HANA', 'Crystal Reports', 'Microsoft Graph', 'Authorize.Net', 'EDI X.12'],
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
    tech: ['T-SQL', 'SAP HANA SQL', 'Cross-platform queries', 'Crystal Reports', 'Service Layer export', 'Interactive dashboards'],
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
    tech: ['AWS (Amplify, Lambda, DynamoDB, Cognito, CDK)', 'React + TypeScript', 'Serverless integration', 'Web UI atop ERP'],
    ctaLabel: 'Discuss a cloud-side need',
    subject: 'Cloud / web project — partner inquiry',
    shape: { ux: 5, depth: 3, tech: 5, duration: 'medium' },
    tags: ['greenfield', 'integration', 'addon'],
  },
];

/* --- Fit selector: scores services against user-chosen shape --- */

const FIT_QS = [
  {
    id: 'stage',
    label: 'Where is the engagement today?',
    options: [
      { val: 'greenfield', label: 'New implementation' },
      { val: 'rescue', label: 'Existing install, needs a senior' },
      { val: 'addon', label: 'Addon or integration' },
      { val: 'reporting', label: 'Reporting / BI gap' },
    ],
  },
  {
    id: 'shape',
    label: 'What is the work, really?',
    options: [
      { val: 'long-engagement', label: 'Months of delivery' },
      { val: 'short-engagement', label: 'Weeks of delivery' },
      { val: 'integration', label: 'Connect B1 to a third party' },
      { val: 'greenfield', label: 'Build something new' },
    ],
  },
  {
    id: 'need',
    label: 'What matters most to you?',
    options: [
      { val: 'depth', label: 'Deep B1 experience' },
      { val: 'tech', label: 'Strong engineering' },
      { val: 'ux', label: 'Modern interface' },
      { val: 'duration', label: 'Scoped end date' },
    ],
  },
];

function score(svc, sel) {
  let s = 0;
  if (sel.stage && svc.tags.includes(sel.stage)) s += 3;
  if (sel.shape && svc.tags.includes(sel.shape)) s += 3;
  if (sel.need) {
    if (sel.need === 'duration') s += svc.shape.duration === 'short' ? 3 : svc.shape.duration === 'medium' ? 2 : 1;
    else s += svc.shape[sel.need] || 0;
  }
  return s;
}

function FitSelector() {
  const [sel, setSel] = svcUS({ stage: 'greenfield', shape: 'long-engagement', need: 'depth' });
  const ranked = svcUM(() => {
    return SVC.map((s) => ({ s, score: score(s, sel) })).sort((a, b) => b.score - a.score);
  }, [sel]);
  const top = ranked[0];
  const maxScore = Math.max(...ranked.map((r) => r.score), 1);

  return (
    <section className="fit">
      <div className="blueprint" />
      <div className="wrap">
        <div style={{ marginBottom: 48 }}>
          <span className="eyebrow" style={{ color: 'oklch(72% 0.06 48)' }}>— Which service fits?</span>
        </div>
        <div className="fit-grid">
          <div className="fit-left">
            <h2 className="h2" style={{ margin: '0 0 20px' }}>Tell me about the engagement. I'll point you at the right lane.</h2>
            <p className="lead">Three questions. The recommendation updates live. None of it is binding — consider it a first filter before you write the email.</p>
            <div className="fit-questions" style={{ marginTop: 40 }}>
              {FIT_QS.map((q) => (
                <div key={q.id} className="fit-q">
                  <div className="q-label">{q.label}</div>
                  <div className="q-options">
                    {q.options.map((o) => (
                      <button
                        key={o.val}
                        className={'chip' + (sel[q.id] === o.val ? ' on' : '')}
                        onClick={() => setSel((p) => ({ ...p, [q.id]: o.val }))}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fit-right">
            <div className="recommend-eyebrow">→ Recommended lane · {String(top.s.num).padStart(2, '0')}</div>
            <h3>{top.s.heading}</h3>
            <p>{top.s.body.split('.')[0]}.</p>
            <div className="fit-meter">
              {ranked.map((r) => {
                const pct = r.score / maxScore;
                return (
                  <div key={r.s.id} className="fit-meter-row">
                    <div style={{ color: r === top ? 'var(--copper)' : undefined }}>{r.s.heading.split(' ').slice(0, 3).join(' ')}</div>
                    <div className="fit-bar">
                      <div className="fit-bar-fill pct" style={{ '--pct': pct.toFixed(2) }} />
                    </div>
                    <div className="fit-bar-val">{Math.round(pct * 100)}</div>
                  </div>
                );
              })}
            </div>
            <a className="fit-cta" href={`mailto:denis@denisdoiron.solutions?subject=${encodeURIComponent(top.s.subject)}`}>
              {top.s.ctaLabel} <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  useSR();
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
          <div className="sr" style={{ marginBottom: 32, display: 'flex', alignItems: 'baseline', gap: 24, flexWrap: 'wrap' }}>
            <span className="eyebrow copper">— Full catalogue</span>
            <h2 className="h2" style={{ margin: 0 }}>Every lane, in detail.</h2>
          </div>
          {SVC.map((s) => (
            <article key={s.id} className="svc-block sr" id={s.id}>
              <div className="svc-num">{s.num} / {String(SVC.length).padStart(2, '0')}</div>
              <div className="svc-body">
                <h3>{s.heading}</h3>
                <p>{s.body}</p>
                <div className="svc-tech">
                  {s.tech.map((t) => <span key={t} className="pill">{t}</span>)}
                </div>
                <a className="svc-cta" href={`mailto:denis@denisdoiron.solutions?subject=${encodeURIComponent(s.subject)}`}>
                  {s.ctaLabel} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ClosingCTA
        text={<>Not sure which fits your project? <em>Send a paragraph.</em> I'll tell you honestly whether I'm the right resource.</>}
        cta="Send a paragraph"
      />
    </>
  );
}

Object.assign(window, { ServicesPage });
