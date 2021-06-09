import './App.css';
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <>
      <Header headerContent="Suchy kantor" />
      <Main>
        <form className="form">
          <h2 className="form__header">Przelicznik walut</h2>
                Pola oznaczone "*" są wymagane
                <p className="form__field">
            <label for="pln" className="form__label">PLN*:</label>
            <input type="number"
              className="form__input" name="pln" id="pln" step="0.01" min="0.05"
              max="9999999999" value="" required />
          </p>
          <button className="form__button">Przelicz</button>
        </form>
        <ul className="currencyList">
          <li className="currencyList__item">EUR: <span className="currencyList__span">---</span></li>
          <li className="currencyList__item">USD: <span className="currencyList__span">---</span></li>
          <li className="currencyList__item">CHF: <span className="currencyList__span">---</span></li>
        </ul>
      </Main>
      <footer className="footer">Copyright &copy; Paweł Suchy 2021
    </footer>
    </>
  );
}

export default App;
