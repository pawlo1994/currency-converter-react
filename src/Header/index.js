import "./style.css";

const Header = ({ headerContent }) => (
    <header className="header">
        <h1 className="header__title">{headerContent}</h1>
    </header>
);

export default Header;