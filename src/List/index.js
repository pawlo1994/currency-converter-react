import "./style.css";

const List = ({ currencies, plnValue }) => {
    return (
        <ul className={`list ${plnValue >= 1000000 ? "list--januszed" : ""}`}>
            <li className="list__item">PLN:
                <span className="list__span">Wartość: {plnValue} PLN</span>
            </li>
            {currencies.map(currency => (
                <li
                    key={currency.id}
                    className="list__item"
                >
                    {currency.name}:
                    <span className="list__span list__span--range">Kurs: {currency.value} PLN</span>
                    <span className="list__span">Wartość: {currency.result} {currency.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default List;