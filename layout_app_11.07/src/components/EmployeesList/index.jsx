import { EmployeeCard } from "../EmployeeCard"
import employees from "../../employees.json"
import styles from "./styles.module.css"


export const EmployeesList = () => {
    return (
        <div className={styles.employeesList}>
            {employees.map(el=> <EmployeeCard key={el.id} {...el}/>)}
        </div>
    )
}