import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import { usePageTitle } from '../hooks/usePageTitle';
import ClosingCTA from '../components/ClosingCTA';
import SignatureStoriesHome from '../components/SignatureStoriesHome';
import styles from './Home.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="blueprint" />
      <div className="wrap">
        <div className={styles.heroGrid}>
          <div className={`${styles.heroEyebrowRow} reveal d1`}>
            <span className="eyebrow eyebrow-dot">Available for partner engagements</span>
            <span className={styles.rule} />
            <span className="eyebrow">Est. 2002 · Freelance since 2007</span>
          </div>
          <h1 className={`display reveal d2 ${styles.heroH1}`}>
            The full SAP Business&nbsp;One<br />
            delivery surface —<br />
            <em>in one senior resource.</em>
          </h1>
          <div className={styles.heroMeta}>
            <p className={`lead reveal d3 ${styles.heroLead}`}>
              Twenty-four years on SAP Business One. 100+ full-lifecycle implementations. Hundreds of custom solutions shipped and still running. I slot into your partner team, report to your PM, and stay through hypercare — no onboarding, no coordination overhead, no capability gaps.
            </p>
            <div className={`${styles.heroActions} reveal d4`}>
              <a
                className="btn btn-primary"
                href="mailto:denis@denisdoiron.solutions?subject=Partner%20inquiry%20via%20denisdoiron.solutions"
              >
                Start a conversation
                <span className="btn-arrow">→</span>
              </a>
              <Link className="btn btn-ghost" to="/services">
                See what I deliver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const n1 = useCountUp(100, { active, duration: 1600 });
  const n2 = useCountUp(24, { active, duration: 1400 });
  const n3 = useCountUp(19, { active, duration: 1400 });
  const n4 = useCountUp(100, { active, duration: 1800 });

  return (
    <div className={styles.ticker} ref={ref}>
      <div className="wrap">
        <div className={styles.tickerRow}>
          <div className={styles.tickerCell}>
            <div className={styles.tickerNum}>
              <span>{Math.floor(n1)}</span>
              <span className={styles.suffix}>+</span>
            </div>
            <div className={styles.tickerLabel}>
              Full-lifecycle<br />implementations
            </div>
          </div>
          <div className={styles.tickerCell}>
            <div className={styles.tickerNum}>
              <span>{Math.floor(n2)}</span>
            </div>
            <div className={styles.tickerLabel}>
              Years on<br />SAP Business One
            </div>
          </div>
          <div className={styles.tickerCell}>
            <div className={styles.tickerNum}>
              <span>{Math.floor(n3)}</span>
            </div>
            <div className={styles.tickerLabel}>
              Years freelance<br />for partners
            </div>
          </div>
          <div className={styles.tickerCell}>
            <div className={styles.tickerNum}>
              <span>{Math.floor(n4)}s</span>
              <span className={styles.suffix}>+</span>
            </div>
            <div className={styles.tickerLabel}>
              Custom solutions<br />&amp; integrations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueProps() {
  useScrollReveal();
  return (
    <section className="section">
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
          <span className="eyebrow copper">— 01</span>
          <h2 className="h2" style={{ margin: 0, maxWidth: '22ch' }}>
            What partners bring me in for.
          </h2>
        </div>
        <div className={`${styles.vpGrid} sr`}>
          <div className={styles.vpCell}>
            <div className={styles.vpNum}>Net&nbsp;New</div>
            <h3 className={styles.vpTitle}>100+ successful full-lifecycle implementations.</h3>
            <p className={styles.vpSupport}>
              Delivered across manufacturing, distribution, and professional services — from small operators to deployments north of 120 users.
            </p>
          </div>
          <div className={styles.vpCell}>
            <div className={styles.vpNum}>Retention</div>
            <h3 className={styles.vpTitle}>Health Check engagements that grow your existing customer base.</h3>
            <p className={styles.vpSupport}>
              Half-day working sessions inside your existing customers — surfacing the streamline, automate, and integrate engagements they're already glad to fund. Runs alongside your net-new motion, never against it.
            </p>
          </div>
          <div className={styles.vpCell}>
            <div className={styles.vpNum}>Rescue</div>
            <h3 className={styles.vpTitle}>Project recovery when an engagement is off the rails.</h3>
            <p className={styles.vpSupport}>
              Outside senior eyes on stuck implementations — a written diagnostic and correction plan the partner and customer can both sign off on, with hands-on follow-through if you need it.
            </p>
          </div>
        </div>
        <div className={`${styles.vpGridSecondary} sr`}>
          <div className={styles.vpCellSmall}>
            <div className={styles.vpNumSmall}>Custom</div>
            <h3 className={styles.vpTitleSmall}>Custom solutions and integrations.</h3>
            <p className={styles.vpSupport}>
              SDK addons, payment gateways, EDI pipelines — still running in production for customers across the globe.
            </p>
          </div>
          <div className={styles.vpCellSmall}>
            <div className={styles.vpNumSmall}>BI</div>
            <h3 className={styles.vpTitleSmall}>Reporting, BI, and data.</h3>
            <p className={styles.vpSupport}>
              Crystal Reports, custom SQL, and interactive dashboards across SQL Server and SAP HANA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowIWork() {
  useScrollReveal();
  return (
    <section className="section band-tinted">
      <div className="wrap">
        <div
          className="sr"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)',
            gap: 64,
            alignItems: 'start',
          }}
        >
          <div>
            <span className="eyebrow copper">— 02 · How I work</span>
            <h2 className="h2" style={{ margin: '18px 0 0', maxWidth: '14ch' }}>
              Senior resource.
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--copper-deep)' }}>
                Your team.
              </em>
            </h2>
          </div>
          <div className="prose">
            <p>
              I work through SAP Business One partners and resellers as a senior contract resource. I slot into your team. I report to your PM. I scope carefully, deliver in phases, and stay through hypercare.
            </p>
            <p>
              When a project needs a custom addon, a cross-platform report, or a modern web interface in front of the ERP, I can build those too. But the foundation of what I do is SAP Business One partner delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeTeasers() {
  useScrollReveal();
  const items = [
    {
      n: '01',
      to: '/services',
      heading: 'What I deliver',
      body: 'Implementations, SDK addons, reporting and BI, and modern-stack additions — all as a senior resource on your team.',
    },
    {
      n: '02',
      to: '/experience',
      heading: 'Who I am',
      body: 'Twenty-four years on SAP Business One. Freelance since 2007. 100+ implementations and hundreds of integrations.',
    },
    {
      n: '03',
      to: '/contact',
      heading: "Let's talk",
      body: 'One email. One-business-day response. Eastern Time, English or French.',
    },
  ];
  return (
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
          <span className="eyebrow copper">— 04</span>
          <h2 className="h2" style={{ margin: 0 }}>
            Where to go next.
          </h2>
        </div>
        <div className={`${styles.teaserGrid} sr`}>
          {items.map((t) => (
            <Link key={t.to} className={styles.teaser} to={t.to}>
              <div className={styles.teaserNum}>{t.n}</div>
              <h3 className={styles.teaserHeading}>{t.heading}</h3>
              <p className={styles.teaserBody}>{t.body}</p>
              <div className={styles.teaserArrow}>
                Continue <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageTitle('Denis Doiron — SAP Business One delivery for partners');
  return (
    <>
      <Hero />
      <Ticker />
      <ValueProps />
      <HowIWork />
      <SignatureStoriesHome />
      <HomeTeasers />
      <ClosingCTA
        text={
          <>
            If your partner practice delivers SAP Business One — or is pitching new engagements that need senior resource depth — <em>I'd be glad to hear what you're working on.</em>
          </>
        }
      />
    </>
  );
}
