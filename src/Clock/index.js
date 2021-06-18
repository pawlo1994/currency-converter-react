import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date().toLocaleString("pl",
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }));
        }, 0);

        return () => {
            clearInterval(intervalId)
        };
    });

    //setTimeout(() => {
    //setInterval(() => {
    //setDate(new Date());
    //}, 1000);
    //}, 0);

    return (<p className="clock">Dzisiaj jest {date} </p>)
};

export default Clock;