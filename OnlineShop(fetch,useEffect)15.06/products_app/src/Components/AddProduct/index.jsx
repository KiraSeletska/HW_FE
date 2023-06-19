import { useState } from "react";
import styles from "./styles.module.css"
import { getRandomID } from "../../App";

export const AddProduct = ({addNewProduct}) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setTitle("");
        setPrice("");
        setDescription("");

        const newProduct = {
            id: getRandomID(), title, price, description
        }

        addNewProduct(newProduct);

    }

    return (
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
            <div className={styles.labelWrapper}>
                <input id="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className={styles.labelWrapper}>
                <input id="price" type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className={styles.labelWrapper}>
                <input id="description" type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <button type="submit">Add</button>
        </form>
    );
}