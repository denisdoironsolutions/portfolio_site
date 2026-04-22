import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.inner}>
        <div>
          <div className={styles.sig}>
            Denis Doiron<span style={{ color: 'var(--copper)' }}>.</span>
          </div>
          <p className={styles.tag}>
            Senior SAP Business One contract resource for partners and resellers. Twenty-four years. Freelance since 2007. Eastern Time, English or French.
          </p>
        </div>
        <div>
          <h4>Site</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Reach me</h4>
          <a href="mailto:denis@denisdoiron.solutions?subject=Partner%20inquiry%20via%20denisdoiron.solutions">
            denis@denisdoiron.solutions
          </a>
          <span className={styles.muted}>One-business-day response</span>
          <span className={styles.muted}>EN · FR · EST</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Denis Doiron — All rights reserved</span>
        <span>Montréal · Canada</span>
      </div>
      <p className={styles.legal}>
        SAP and SAP Business One are trademarks or registered trademarks of SAP SE in Germany and other countries. This site is not affiliated with, endorsed by, or sponsored by SAP SE.
      </p>
    </footer>
  );
}
