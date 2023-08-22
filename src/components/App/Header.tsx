import logo from '../../assets/images/logo-github.png';

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="logo github" />
    </header>
  );
}

export default Header;
