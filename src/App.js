import './App.css';
import Header from "./Header";
import Main from "./Main";
import List from "./List";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  return (
    <>
      <Header headerContent="Suchy kantor" />
      <Main className="main">
        <Form />
        <List />
      </Main>
      <Footer footerContent="Copyright &copy; Paweł Suchy 2021" />
    </>
  );
}

export default App;
