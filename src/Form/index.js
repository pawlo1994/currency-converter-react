import "./style.css";
import { useState } from "react";
import List from "../List";

const Form = ({ currencies }) => {
    let results;
    const [userValue, setUserValue] = useState("");
    const [plnValue, setPlnValue] = useState("");

    const onFormSubmit = event => {
        event.preventDefault();
        results = currencies.map(({ result, value }) => result = (userValue / value).toFixed(2));
        for (let i = 0; i <= 2; i++) {
            currencies[i].result = results[i];
        };
        setPlnValue((+userValue).toFixed(2));
        setUserValue("");
    };

    return (
        <>
            <form
                className="form"
                onSubmit={onFormSubmit}
            >
                <h2 className="form__header">Przelicznik walut</h2>
                Pola oznaczone "*" są wymagane
                <p className="form__field">
                    <label htmlFor="pln" className="form__label">PLN*:</label>
                    <input
                        type="number"
                        className="form__input"
                        value={userValue}
                        onChange={({ target }) => setUserValue(target.value)}
                        name="pln"
                        id="pln"
                        step="0.01"
                        min="0.05"
                        max="9999999999"
                        required
                    />
                </p>
                <button className="form__button">Przelicz</button>
            </form>
            <List
                currencies={currencies}
                results={results}
                plnValue={plnValue}
            />
        </>
    );
};

export default Form;
