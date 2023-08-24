import { Image } from 'semantic-ui-react';
import logo from '../../assets/images/logo-github.png';

function Header() {
  return (
    <header>
      <Image src={logo} alt="logo github" size="small" centered />
    </header>
  );
}

export default Header;
