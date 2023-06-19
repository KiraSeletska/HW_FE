import styles from "./styles.module.css"
import mobile from "../../images/mobile.svg"
import desktop from "../../images/desktop.svg"
import product from "../../images/product.svg"
import quality from "../../images/quality.svg"

export const Services = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cardWrapper}>
                <img src={mobile} alt="" className={styles.image}/>
                <div className={styles.textWrapper}>
                    <h3 className={styles.cardHeader}>Mobile Development</h3>
                    <p className={styles.cardText}>We develop mobile apps for all contemporary mobile platforms. Mamon team builds 
native and cross-platform solutions.</p>
                </div>
            </div>
            <div className={styles.cardWrapper}>
                <img src={desktop} alt="" className={styles.image}/>
                <div className={styles.textWrapper}>
                    <h3 className={styles.cardHeader}>Web Development</h3>
                    <p className={styles.cardText}>
                        Mamon offers full range of services from various
                        CMS and frameworks based websites to complex ERP/CRM solutions and e-commerce stores.</p>
                </div>
            </div>
            <div className={styles.cardWrapper}>    
                <img src={product} alt="" className={styles.image}/>
                <div className={styles.textWrapper}>
                    <h3 className={styles.cardHeader}>Product Design</h3>
                    <p className={styles.cardText}>
                        Mamon offers full range of services from various CMS and frameworks based websites to complex ERP/CRM solutions and e-commerce stores.</p>
                </div>
            </div>
            <div className={styles.cardWrapper}>
                <img src={quality} alt="" className={styles.image}/>
                <div className={styles.textWrapper}>
                    <h3 className={styles.cardHeader}>Quality Assurance</h3>
                    <p className={styles.cardText}>
                        Our QA team ensures high standard of quality of products delivered.
</p>
                </div>
            </div>
        
        </div>
    )
    
}