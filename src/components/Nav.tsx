import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';

const items = [
  { to: '/services', label: 'Services' },
  { to: '/stories', label: 'Stories' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (to: string) =>
    pathname === to || (to !== '/' && pathname.startsWith(to));

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.wordmark}>
          Denis Doiron<span className={styles.dot} />
        </Link>
        <div className={styles.links}>
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className={`${styles.link} ${isActive(it.to) ? styles.active : ''}`}
            >
              {it.label}
            </Link>
          ))}
          <a
            href="mailto:denis@denisdoiron.solutions?subject=Partner%20inquiry%20via%20denisdoiron.solutions"
            className={styles.cta}
          >
            denis@denisdoiron.solutions
          </a>
        </div>
      </div>
    </nav>
  );
}
