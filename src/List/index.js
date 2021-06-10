import "./style.css";

const List = ({ currencies, result }) => (
    <ul className="list">
        {currencies.map(currency => (
            <li
                key={currency.id}
                className="list__item"
            >
                {currency.currencyName}: <span className="list__span">{result.toFixed(2)}</span>
                <span className="list__span list__span--range">Kurs: {currency.currencyValue}</span>
            </li>
        ))}
    </ul>
);

export default List;