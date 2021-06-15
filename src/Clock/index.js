import "./style.css";

const Clock = ({ clockContent }) => {
    return (<p className="clock">Dzisiaj jest&nbsp;{clockContent} </p>)
};

export default Clock;