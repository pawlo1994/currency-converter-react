import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [clockContent, setClockContent] = useState(date.toLocaleString());

    useEffect(() => {
        setClockContent(date.toLocaleString("pl", {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
        ));
    }, [date]);

    setTimeout(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000)
    }, 0);
    return (<p className="clock">Dzisiaj jest {clockContent} </p>)
};

export default Clock;