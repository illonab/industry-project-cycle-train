import "./Home.scss";
import mainpage from "../../assets/images/cycle-animation.gif";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main">
      <div className="main__wrapper">
        <h1 className="main__title">Hi Sophie! Welcome Back</h1>
        <img src={mainpage} alt="" className="main__img" />
        <div className="main__trip">
          <h2 className="main__subheading">Plan your trip</h2>
          <div className="main__plan">
            <div className="main__cycle btn-trip main__cycle--active">
              Cycle Train
            </div>
            <div className="main__solo btn-trip">Solo Trip</div>
          </div>
        </div>
        <div className="main__plan-trip">
          <h2 className="main__subheading">Details</h2>
          <label className="main__control main__container-from">
            From
            <select name="stations" className="main__select">
              <option value="Home">Home</option>
              <option value="finchley">Finchley Central</option>
              <option value="hampsted">Hampstead</option>
              <option value="camden">Camden Town</option>
              <option value="victoria">Victoria</option>
              <option value="kentish">Kentish Town</option>
              <option value="kings cross">Kings Cross</option>
            </select>
            <i className="bi bi-arrow-left-right main__icon"></i>
            <select name="stations" className="main__select">
              <option value="Home">Work</option>
              <option value="finchley">Finchley Central</option>
              <option value="hampsted">Hampstead</option>
              <option value="camden">Camden Town</option>
              <option value="victoria">Victoria</option>
              <option value="kentish">Kentish Town</option>
              <option value="kings cross">Kings Cross</option>
            </select>
          </label>

          <label className="main__control">
            Date:
            <input
              type="date"
              className="main__date"
              name="date"
              value="dd/mm"
            />
          </label>
          <label className="main__control">
            Time:
            <input
              type="time"
              className="main__time"
              name="time"
              min="09:00"
              max="21:00"
            />
          </label>
        </div>
        <Link to={"/results"}>
          <input type="submit" value="Go" className="main__btn cta-btn" />
        </Link>
      </div>
    </main>
  );
}

export default Home;
