import "./style.css";
import { useState } from "react";


const Form = ({ currencies }) => {
    const [userValue, setUserValue] = useState(0);
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(userValue * currencies.currencyValue);
    };

    return (
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
    );
};

export default Form;