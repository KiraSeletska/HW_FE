import styles from "./styles.module.css";
import { Product } from "../Propduct";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const GetProductById = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [index, setIndex] = useState("");
  const [indexState, setIndexState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${index}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        console.log(data.images);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [indexState]);

  const handleSubmit = (el) => {
    el.preventDefault();
    setIndexState(!indexState);
  };

  return (
    <form className={styles.findIdForm} onSubmit={handleSubmit} action="">
      <input
        onChange={(event) => {
          setIndex(event.target.value);
        }}
        type="number"
        id="tentacles"
        min="0"
        max="199"
        placeholder="Id..."
        value={index}
      ></input>
      <button
        onClick={(event) => {
          console.log(event.target.value);
        }}
        type="onSubmit"
      >
        Finde product
      </button>
      {loading ? (
        <h3 className={styles.textLoading}>
          {" "}
          Loading <FontAwesomeIcon icon={faSpinner} spinPulse />{" "}
        </h3>
      ) : (
        <div>
          <Product
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.images}
          />
        </div>
      )}
      {error ? <h3>Error: {error.message}</h3> : null}
    </form>
  );
};
