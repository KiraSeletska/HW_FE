import styles from "./styles.module.css"

export const Input = ({onAddMessage}) => {
    const onEnter = (event) => {
        if (event.key === "Enter") {
            onAddMessage(event.target.value)
            event.target.value = ""
        }
    }

    return (
        <input className={styles.textInput} onKeyDown={onEnter}/>
    )
}