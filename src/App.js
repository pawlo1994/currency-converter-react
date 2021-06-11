import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  const currencies = [
    {
      id: 1,
      name: "EUR",
      value: 4.47,
      result: 0,
    },
    {
      id: 2,
      name: "USD",
      value: 3.68,
      result: 0,
    },
    {
      id: 3,
      name: "CHF",
      value: 4.11,
      result: 0,
    },
  ];

  return (
    <>
      <Header headerContent="Suchy kantor" />
      <Main className="main">
        <Form
          currencies={currencies}
        />
      </Main>
      <Footer footerContent="Copyright &copy; Paweł Suchy 2021" />
    </>
  );
}

export default App;
