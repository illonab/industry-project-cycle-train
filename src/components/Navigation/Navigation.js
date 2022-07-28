import "./Navigation.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__wrapper">
        <div className="navigation__items">
          <Link to={"/"}>
            <i className="navigation__item bi bi-house"></i>
          </Link>
          <i className="navigation__item bi-bicycle"></i>
          <i className="navigation__item bi bi-compass"></i>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
