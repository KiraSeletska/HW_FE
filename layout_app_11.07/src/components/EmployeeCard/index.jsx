import styles from './styles.module.css'

export const EmployeeCard = ({imagePath, name, position}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={imagePath} alt={name}/>
            <div className={styles.positionContainer}>
                <p className={styles.name}>{name}</p>
                <p className={styles.position}>{position}</p>
            </div>
        </div>
    )
}