import clients from "../../clients.json";
import styles from "./styles.module.css";

export const Clients = () => {
    return (
        <div className={styles.wrapper}>
            {clients.map(el=><img key={el.id} src={el.image} alt={el.title}/>)}
        </div>
    )
}