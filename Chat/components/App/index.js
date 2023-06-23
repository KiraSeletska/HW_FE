import { useState } from 'react';
import { Input } from '../Input';
import { List } from '../List';
import { UploadData } from '../UploadData';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  const addNewMessage = (text, attachment) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    setMessages(prev=>[...prev, {text, timestamp: `${hours}:${minutes}:${seconds}`, attachment}]);
  }

  
  return (
    <div className="App">
      <List messages={messages}/>
      <div className='AppInput'>
        <Input onAddMessage={addNewMessage}/>
        <UploadData onAddMessage={addNewMessage}/>
      </div>
    </div>
  );
}

export default App;
