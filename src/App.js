import { useState, useEffect } from 'react';
export default function Hooksassig3()
 {
    const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    },)

    return () => clearInterval(intervalId);
  }, [])
  return (
    <div>
    <h1> {date.toLocaleTimeString()}</h1>
     </div>
  )
}