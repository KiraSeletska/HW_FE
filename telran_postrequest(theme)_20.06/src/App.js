import { ItemList } from "./components/Eshop/ItemList";
import classes from "./app.module.css";
import { ApiContext, ThemeContext } from "./contexts";
import { useState, useEffect } from "react";
import axios from "axios";
import { AddItem } from "./components/Eshop/AddItem";
import { postItem } from "./requests";
import { deleteItem  } from "./requests";
import { getRandomID } from "./components/Eshop/AddItem";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const [actualTheme, setActualTheme] = useState('white')
const [themeState, setThemeState] = useState(false)

  const url = "https://api.escuelajs.co/api/v1/products?limit=7&offset=1";
  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setIsLoading(false);
        setItems(data);
      } catch (error) {
        console.error("Error:", error);
        setError(error);
        setIsLoading(false);
      }
    };
    getdata();
  }, []);

  const handlePostedData = async (obj) => {
    const responseItem = await postItem(obj);
    setItems([...items, responseItem]);
  };

  const handleDeletItem = async (id) => {
    const response = await deleteItem(id);
    response
      ? setItems((prevItems) => prevItems.filter((el) => el.id !== id))
      : console.log("error");
  };

  const changeTheme = () => {
    if(!themeState){
      setActualTheme('dark')
      setThemeState(true)
    
    } else {
      setActualTheme('white')
      setThemeState(false)
 
    }

  }
  return (
    <ThemeContext.Provider value={{actualTheme}}>
  <ApiContext.Provider value={{ items, handlePostedData, handleDeletItem }}>
      <div className="App">
      <button onClick={changeTheme}>Change Theme</button>
        <h1 className={classes.header}>Our Best Eshop</h1>
        <AddItem id={getRandomID}/>
   
        {error ? <h1>An error occurred: {error.message}</h1> : null}
        {isLoading ? <h1>LOADING...</h1> : <ItemList />}
      </div>
    </ApiContext.Provider>
    </ThemeContext.Provider>
  
  );
}

export default App;
