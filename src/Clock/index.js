import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [clockContent, setClockContent] = useState(date.toLocaleString());

    useEffect(() => {
        setClockContent(date.toLocaleString());
    }, [date]);

    setTimeout(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000)
    }, 0);
    return (<p className="clock">Dzisiaj jest&nbsp;{clockContent} </p>)
};

export default Clock;