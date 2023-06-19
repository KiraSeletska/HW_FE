import styles from "./styles.module.css";


export const Product = ({ title, description, price, image }) => {

    return (
        
        <div className={styles.itemWrapper}>
            <h3>{title}</h3>
            <img src={image} />
            <p>{description}</p>
            <span>{price}</span>
        </div>
    )
}