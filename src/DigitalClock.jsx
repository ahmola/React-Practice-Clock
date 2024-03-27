import React, {useState, useEffect} from 'react'

export default function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log("created")
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meris = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        
        return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${meris}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number
    }

  return (
    <div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}
