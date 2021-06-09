import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Suchy kantor</h1>
      </header>
      <main className="main js-main">
        <form className="form js-form">
          <fieldset className="fieldset">
            <legend className="fieldset__legend">Przelicznik walut</legend>
                Pola oznaczone "*" są wymagane
                <p className="form__field"><label for="pln" className="form__label">PLN*:</label> <input type="number"
              className="form__input js-form__input--pln" name="pln" id="pln" step="0.01" min="0.05"
              max="9999999999" value="" required /></p>
            <button className="main__button js-convertButton">Przelicz</button>
            <ul className="fieldset__list">
              <li className="fieldset__item">EUR: <span className="fieldset__span js-eur__value">---</span></li>
              <li className="fieldset__item">USD: <span className="fieldset__span js-usd__value">---</span></li>
              <li className="fieldset__item">CHF: <span className="fieldset__span js-chf__value">---</span></li>
            </ul>
          </fieldset>
        </form>
      </main>
      <footer className="footer">Copyright &copy; Paweł Suchy 2021
    </footer>
    </>
  );
}

export default App;
