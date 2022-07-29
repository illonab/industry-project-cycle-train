import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <label for="toggle" class="header__burger">
        &#9776;
      </label>
      <nav class="header__navigation">
        <input type="checkbox" id="toggle" class="header__checkbox" />
        <div class="header__items">
          <a href="#" class="header__item">
            Menu
          </a>
          <a href="#" class="header__item">
            Account
          </a>
          <a href="#" class="header__item">
            Help
          </a>
          <a href="#" class="header__item">
            Settings
          </a>
          <a href="#" class="header__item">
            Log out
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
