import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";
import Clock from "./Clock";
import Container from "./Container";

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
      <Container>
        <Header headerContent="Suchy kantor" />
        <Clock />
        <Main>
          <Form currencies={currencies} />
        </Main>
        <Footer footerContent="Copyright &copy; Paweł Suchy 2021" />
      </Container>
    </>
  );
}

export default App;
