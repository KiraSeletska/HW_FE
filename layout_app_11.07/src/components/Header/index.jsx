import styles from './styles.module.css';
import logo from '../../images/logo.svg';
import { Button } from '../Button';


export const Header = ({
  border,
  background,
  borderRadius,
  padding,
  color,
  fontWeight,
}) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='mamonLogo' />
        <h1 className={styles.title}>mamon</h1>
      </div>
      <nav>
        <ul className={styles.list}>
          <li ><a href='#' className={styles.link}>Services</a></li>
          <li><a href='#' className={styles.link}>Clients</a></li>
          <li><a href='#' className={styles.link}>Our team</a></li>
          <li>
            <Button fontSize="14px" border="none" background="#5528ff" borderRadius="5px" padding="3px 14px" color="white" fontWeight="700">Contact us</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};