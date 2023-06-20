import { useEffect, useState, useContext } from "react";
import { Item } from "./Item";
import { ApiContext } from "../../contexts";
import classes from './itemList.module.css'

export const ItemList = () => {
  const {items} = useContext(ApiContext)
  //const [items, setItems] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
 // const [error, setError] = useState(null);
  /*
  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=7&offset=1')
        const data = await response.json()
        setItems(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error:', error)
        setError(error)
        setIsLoading(false)
      }
    }
    getdata()
  }, [])

  //axios ->

  const url = "https://api.escuelajs.co/api/v1/products?limit=7&offset=1"
  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true);
      try {
        const {data} = await axios.get(url)
        setIsLoading(false)
        setItems(data)
      } catch (error) {
        console.error("Error:", error);
        setError(error);
        setIsLoading(false);
      }
    };
    getdata();
  }, []);
*//*
  const handlePostedData = async (obj) => {
    const responseItem = await postItem(obj); 
    console.log(responseItem);
    setItems([...items, responseItem]);
  };*/
/*    <div className={classes.addItemContainer}>
        <AddItem addNewProduct={handlePostedData} /> в Апп
      </div> */
  return (
   
       <div className={classes.addItemContainer}>
       {items.map((product) => (
            <Item
            id={product.id}
              key={product.id}
              image={product.images[0]}
              description={product.description}
              title={product.title}
              price={product.price}
            />
          ))}
        </div> 
  );
};
