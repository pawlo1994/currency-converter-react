import "./style.css";

const List = ({ currencies, userValue }) => (
    <ul className="list">
        {currencies.map(currency => (
            <li
                key={currency.id}
                className="list__item"
            >
                {currency.currencyName}: <span className="list__span">{currency.currencyValue.toFixed(2)}</span>
            </li>
        ))}
    </ul>
);

export default List;