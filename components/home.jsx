/* Home page */

const { useState: uS, useEffect: uE, useRef: uR } = React;

function Hero() {
  return (
    <section className="hero">
      <div className="blueprint" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-eyebrow-row reveal d1">
            <span className="eyebrow eyebrow-dot">Available for partner engagements</span>
            <span className="rule" />
            <span className="eyebrow">Est. 2002 · Freelance since 2007</span>
          </div>
          <h1 className="display reveal d2">
            Senior SAP Business&nbsp;One<br />
            delivery, <em>slotted into</em><br />
            your partner team.
          </h1>
          <div className="hero-meta">
            <p className="lead reveal d3">
              Twenty-four years on SAP Business One. 100+ full-lifecycle implementations. Hundreds of integrations shipped and still running. I work inside your methodology, report to your PM, and stay through hypercare.
            </p>
            <div className="hero-actions reveal d4">
              <a className="btn btn-primary" href="mailto:denis@denisdoiron.solutions?subject=Partner%20inquiry%20via%20denisdoiron.solutions">
                Start a conversation
                <span className="btn-arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#/services">
                See what I deliver
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const [active, setActive] = uS(false);
  const ref = uR(null);
  uE(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { setActive(true); io.disconnect(); } }),
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n1 = useCountUp(100, { active, duration: 1600 });
  const n2 = useCountUp(24, { active, duration: 1400 });
  const n3 = useCountUp(19, { active, duration: 1400 });
  const n4 = useCountUp(100, { active, duration: 1800 });
  return (
    <div className="ticker" ref={ref}>
      <div className="wrap">
        <div className="ticker-row">
          <div className="ticker-cell">
            <div className="ticker-num"><span>{Math.floor(n1)}</span><span className="suffix">+</span></div>
            <div className="ticker-label">Full-lifecycle<br />implementations</div>
          </div>
          <div className="ticker-cell">
            <div className="ticker-num"><span>{Math.floor(n2)}</span></div>
            <div className="ticker-label">Years on<br />SAP Business One</div>
          </div>
          <div className="ticker-cell">
            <div className="ticker-num"><span>{Math.floor(n3)}</span></div>
            <div className="ticker-label">Years freelance<br />for partners</div>
          </div>
          <div className="ticker-cell">
            <div className="ticker-num"><span>{Math.floor(n4)}s</span><span className="suffix">+</span></div>
            <div className="ticker-label">Custom solutions<br />& integrations</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueProps() {
  useSR();
  return (
    <section className="section">
      <div className="wrap">
        <div className="sr" style={{ marginBottom: 56, display: 'flex', alignItems: 'baseline', gap: 24, flexWrap: 'wrap' }}>
          <span className="eyebrow copper">— 01</span>
          <h2 className="h2" style={{ margin: 0, maxWidth: '22ch' }}>What partners bring me in for.</h2>
        </div>
        <div className="vp-grid sr">
          <div className="vp-cell">
            <div className="vp-num">100+</div>
            <h3 className="vp-title">Successful full-lifecycle implementations.</h3>
            <p className="vp-support">Delivered across manufacturing, distribution, and professional services — from small operators to deployments north of 120 users.</p>
          </div>
          <div className="vp-cell">
            <div className="vp-num">Hundreds</div>
            <h3 className="vp-title">Custom solutions and integrations shipped.</h3>
            <p className="vp-support">SDK addons, payment gateways, EDI pipelines, cross-platform reporting — still running in production for customers across the globe.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowIWork() {
  useSR();
  return (
    <section className="section band-tinted">
      <div className="wrap">
        <div className="sr" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)', gap: 64, alignItems: 'start' }}>
          <div>
            <span className="eyebrow copper">— 02 · How I work</span>
            <h2 className="h2" style={{ margin: '18px 0 0', maxWidth: '14ch' }}>Senior resource.<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--copper-deep)' }}>Your team.</em></h2>
          </div>
          <div className="prose">
            <p>I work through SAP Business One partners and resellers as a senior contract resource. I slot into your team. I report to your PM. I scope carefully, deliver in phases, and stay through hypercare.</p>
            <p>When a project needs a custom addon, a cross-platform report, or a modern web interface in front of the ERP, I can build those too. But the foundation of what I do is SAP Business One partner delivery — and that's what I'd rather talk about first.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeTeasers() {
  useSR();
  const items = [
    { n: '01', to: '/services', heading: 'What I deliver', body: 'Implementations, SDK addons, reporting and BI, and modern-stack additions — all as a senior resource on your team.' },
    { n: '02', to: '/experience', heading: 'Who I am', body: 'Twenty-four years on SAP Business One. Freelance since 2007. 100+ implementations and hundreds of integrations.' },
    { n: '03', to: '/contact', heading: "Let's talk", body: 'One email. One-business-day response. Eastern Time, English or French.' },
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div className="sr" style={{ marginBottom: 48, display: 'flex', alignItems: 'baseline', gap: 24, flexWrap: 'wrap' }}>
          <span className="eyebrow copper">— 03</span>
          <h2 className="h2" style={{ margin: 0 }}>Where to go next.</h2>
        </div>
        <div className="teaser-grid sr">
          {items.map((t) => (
            <a key={t.to} className="teaser" href={'#' + t.to}>
              <div className="teaser-num">{t.n}</div>
              <h3 className="teaser-heading">{t.heading}</h3>
              <p className="teaser-body">{t.body}</p>
              <div className="teaser-arrow">Continue <span>→</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA({ text, cta = 'Start a conversation', subject = 'Partner inquiry via denisdoiron.solutions' }) {
  useSR();
  return (
    <section className="closing band-tinted">
      <div className="wrap">
        <div className="closing-inner sr">
          <span className="eyebrow copper" style={{ display: 'block', marginBottom: 20 }}>— Next</span>
          <p className="closing-text">{text}</p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:denis@denisdoiron.solutions?subject=${encodeURIComponent(subject)}`}>
              {cta} <span className="btn-arrow">→</span>
            </a>
            <span className="meta-line">ONE-BUSINESS-DAY RESPONSE · EST · EN/FR</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <ValueProps />
      <HowIWork />
      <HomeTeasers />
      <ClosingCTA text={<>If your partner practice delivers SAP Business One — or is pitching new engagements that need senior resource depth — <em>I'd be glad to hear what you're working on.</em></>} />
    </>
  );
}

Object.assign(window, { Home, ClosingCTA });
