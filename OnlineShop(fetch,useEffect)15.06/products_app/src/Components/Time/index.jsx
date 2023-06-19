import styles from './styles.module.css'
import { useState, useEffect } from 'react';

export const Time  = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);//очистка 
      }, []);

      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      const timeString = `${hours}:${minutes}:${seconds}`;

    return (
       
 <h3 className={styles.time}>{timeString}</h3>

      
    )
}