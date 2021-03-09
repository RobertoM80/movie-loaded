import Infos from "components/shared/Infos";
import Title from "components/Title";
import MainNav from "components/MainNav";
import "css/Header.css";

function Header() {
  return (
    <header>
      <Title />

      <Infos />

      <MainNav />
    </header>
  );
}

export default Header;
