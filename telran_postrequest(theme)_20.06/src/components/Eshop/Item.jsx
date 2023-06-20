import { useContext, useState } from "react";
import classes from "./item.module.css";
import { ApiContext, ThemeContext } from "../../contexts";

export const Item = ({ title, price, image, description, id }) => {
  const { handleDeletItem } = useContext(ApiContext);
  const { actualTheme } = useContext(ThemeContext);

  //className={`${classes.item} ${classes[theme]}`
  //   <div className={classes[actualTheme]}>
  return (
    <div className={classes.item + " " + classes[actualTheme]}>
      <button className={classes.deletBtn} onClick={() => handleDeletItem(id)}>
        X
      </button>
      <h1>{title}</h1>
      <img className={classes.image} src={image} alt={title} />
      <p className={classes.description}>{description}</p>
      <span>{price}$</span>
    </div>
  );
};
