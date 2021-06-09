import "./style.css";

const List = () => (
    <ul className="list">
        <li
            key="1"
            className="list__item"
        >
            EUR: <span className="list__span">---</span>
        </li>
        <li
            key="2"
            className="list__item"
        >
            USD: <span className="list__span">---</span>
        </li>
        <li
            key="3"
            className="list__item"
        >
            CHF: <span className="list__span">---</span>
        </li>
    </ul>
);

export default List;