import { Link } from "react-router-dom";

function MainNavLinks() {
  return (
    <nav className="links-container d-flex flex-row justify-content-start align-items-center">
      <p className="m-0 mx-2">
        <Link className="" to="/upcoming">
          Best Movies
        </Link>
      </p>{" "}
      |
      <p className="m-0 mx-2">
        <Link className="" to="/rated">
          High Rate
        </Link>
      </p>{" "}
      |
      <p className="m-0 mx-2">
        <Link className="" to="/popular">
          Popular
        </Link>
      </p>
    </nav>
  );
}

export default MainNavLinks;
