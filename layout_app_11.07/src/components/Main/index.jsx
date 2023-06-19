import { Button } from "../Button";
import styles from './styles.module.css'

export const Main = ({
    border,
    background,
    borderRadius,
    padding,
    color,
    fontWeight,
}) => {
  return (
    <div className={styles.wrapperMain}>
      <h1 className={styles.headerMain}>We're an independent development agency.</h1>
      <p className={styles.textMain}>
        We understand the intricacies of web development inside-out. That's why
        we build rock-solid Mobile and Web applications enriched with
        user-centered visual experiences.
      </p>
      <Button border="none" background="#5528ff" borderRadius="10px" padding="11px 58px" color="white" fontWeight="500" fontSize="24px"/>
    </div>
  );
};