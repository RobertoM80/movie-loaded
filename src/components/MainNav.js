import MainNavLinks from "components/MainNavLinks";
import SearchBar from "components/shared/SearchBar";
import "css/MainNav.css";

function MainNav() {
  return (
    <div className="navbar-container py-1 d-flex flex-row justify-content-between">
      <MainNavLinks />

      {/* <SearchBar /> */}
    </div>
  );
}

export default MainNav;
