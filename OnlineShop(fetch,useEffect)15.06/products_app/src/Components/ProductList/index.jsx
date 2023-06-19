import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AddProduct } from "../AddProduct";
import { Product } from "../Propduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Time } from "../Time";
import { GetProductById } from "../GetProductById";

export const PropuctList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const FetchDate = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?limit=20&offset=10"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    FetchDate();
  }, []);

  const addNewPropuct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <div className={styles.headerWrapper}>
        <GetProductById />
        <div className={styles.wrapperaddForm}>
        <Time />
       <p className={styles.addForm}>AddForm</p>
        </div>

      </div>

      <div className={styles.productsList}>
        {loading ? (
          <h3 className={styles.textLoading}>
            {" "}
            Loading <FontAwesomeIcon icon={faSpinner} spinPulse />{" "}
          </h3>
        ) : (
          products.map((el) => (
            <Product key={el.id} image={el.images[2]} {...el} />
          ))
        )}
        {error ? <h3>Error: {error.message}</h3> : null}
      </div>
    </div>
  );
};
