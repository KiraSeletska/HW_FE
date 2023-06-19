import logo from '../../images/logo.svg';
import logoGithub from '../../images/logo-github.svg';
import logoBehance from '../../images/logo-behance.svg';
import logoLinkedin from '../../images/logo-linkedin.svg';
import logoCodepen from '../../images/logo-codepen.svg';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div className={styles.wrapperFooter}>
      <img src={logo} className={styles.logoFooter} />
      <div>
        <ul className={styles.listFooter}>
          <li>
            <a>
              <img src={logoGithub} />
            </a>
          </li>
          <li>
            <a>
              <img src={logoBehance} />
            </a>
          </li>
          <li>
            <a>
              <img src={logoLinkedin} />
            </a>
          </li>
          <li>
            <a>
              <img src={logoCodepen} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};