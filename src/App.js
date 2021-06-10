import './App.css';
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import List from "./List";
import Footer from "./Footer";
import Form from "./Form";

const currencies = [
  {
    id: 1,
    currencyName: "EUR",
    currencyValue: 4.47,
  },
  {
    id: 2,
    currencyName: "USD",
    currencyValue: 3.68,
  },
  {
    id: 3,
    currencyName: "CHF",
    currencyValue: 4.11,
  },
];

function App() {
  const [userValue, setUserValue] = useState(1);
  return (
    <>
      <Header headerContent="Suchy kantor" />
      <Main className="main">
        <Form
          currencies={currencies}
        />
        <List
          currencies={currencies}
          userValue={userValue}
        />
      </Main>
      <Footer footerContent="Copyright &copy; Paweł Suchy 2021" />
    </>
  );
}

export default App;
