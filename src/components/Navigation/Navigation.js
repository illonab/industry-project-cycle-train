import "./Navigation.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__wrapper">
        <div className="navigation__items">
          <Link to={"/"}>
            <div className="navigation__link-wrapper navigation__link-wrapper--active">
              <i className="navigation__item bi bi-house"></i>
              <p className="navigation__item-label">Home</p>
            </div>
          </Link>
          <div className="navigation__link-wrapper">
            <i className="navigation__item bi-bicycle"></i>
            <p className="navigation__item-label">My Profile</p>
          </div>
          <div className="navigation__link-wrapper">
            <i className="navigation__item bi bi-compass"></i>
            <p className="navigation__item-label">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
