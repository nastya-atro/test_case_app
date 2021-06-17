import SearchInput from "../SearchInput";
import logo from "../../assets/logo.svg";
import "./index.css";

const Header = ({ onSearch }) => (
  <div className='Fixed_Header'>
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <SearchInput onSearch={onSearch} />
  </header>
  </div>
);

export default Header;
 