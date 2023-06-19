import { PropuctList } from './Components/ProductList';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export const getRandomID = () => {
  const min = 0;
  const max = 1679615;
  let int = Math.floor(Math.random() * (max - min + 1)) + min;
  return int.toString(36);
};

function App() {
  return (
    <div className="wrapper">
   <PropuctList/>
  
    </div>
  );
}

export default App;
