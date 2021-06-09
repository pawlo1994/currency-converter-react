import "./style.css";

const Main = ({ children, className }) => (
    <main className={className}>
        {children}
    </main>
);

export default Main;