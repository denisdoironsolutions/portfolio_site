/* Shared components: Nav, Footer, utility hooks */

const { useState, useEffect, useRef, useMemo } = React;

function useRoute() {
  const [hash, setHash] = useState(() => window.location.hash.replace('#', '') || '/');
  useEffect(() => {
    const h = () => {
      setHash(window.location.hash.replace('#', '') || '/');
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);
  return hash;
}

function Link({ to, className, children, ...rest }) {
  return (
    <a
      href={'#' + to}
      className={className}
      onClick={(e) => {
        // let default do the work
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

function Nav({ route }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [
    { to: '/services', label: 'Services' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ];
  const isActive = (to) => route === to || (to !== '/' && route.startsWith(to));
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="nav-inner">
        <a href="#/" className="wordmark">
          Denis Doiron<span className="dot" />
        </a>
        <div className="nav-links">
          {items.map((it) => (
            <a
              key={it.to}
              href={'#' + it.to}
              className={'nav-link' + (isActive(it.to) ? ' active' : '')}
            >
              {it.label}
            </a>
          ))}
          <a href="mailto:denis@denisdoiron.solutions?subject=Partner%20inquiry%20via%20denisdoiron.solutions" className="nav-cta">
            denis@denisdoiron.solutions
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div>
          <div className="sig">Denis Doiron<span style={{ color: 'var(--copper)' }}>.</span></div>
          <p className="tag">Senior SAP Business One contract resource for partners and resellers. Twenty-four years. Freelance since 2007. Eastern Time, English or French.</p>
        </div>
        <div>
          <h4>Site</h4>
          <a href="#/">Home</a>
          <a href="#/services">Services</a>
          <a href="#/experience">Experience</a>
          <a href="#/contact">Contact</a>
        </div>
        <div>
          <h4>Reach me</h4>
          <a href="mailto:denis@denisdoiron.solutions?subject=Partner%20inquiry%20via%20denisdoiron.solutions">denis@denisdoiron.solutions</a>
          <a>One-business-day response</a>
          <a>EN · FR · EST</a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Denis Doiron — All rights reserved</span>
        <span>Montréal · Canada</span>
      </div>
    </footer>
  );
}

/* Scroll reveal */
function useSR() {
  useEffect(() => {
    const els = document.querySelectorAll('.sr');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* Count-up hook */
function useCountUp(target, { duration = 1800, start = 0, active = true } = {}) {
  const [val, setVal] = useState(start);
  useEffect(() => {
    if (!active) return;
    let raf;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(start + (target - start) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return val;
}

Object.assign(window, { Nav, Footer, Link, useRoute, useSR, useCountUp });
