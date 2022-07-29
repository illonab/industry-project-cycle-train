import "./Home.scss";
import avatar from "../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main">
      <h1 className="main__title">Hi Siphie! Welcome Back</h1>
      <img src={avatar} alt="" className="main__img" />
      <div className="main__trip">
        <div className="main__solo btn-trip">Solo Trip</div>
        <div className="main__cycle btn-trip main__cycle--active">
          Cycle Train
        </div>
      </div>
      <label className="main__control">
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
        <i class="bi bi-arrow-left-right"></i>
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
          value="2022-07-29"
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
      <Link to={"/results"}>
        <input type="submit" value="Go" className="main__btn cta-btn" />
      </Link>
    </main>
  );
}

export default Home;
