import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  const handleSignup = () => {
    navigate("/signup")
  }

  return (
    <div className="landing-page__div">
      <div className="landing-page__navbar">
        <button className="landing-page__nav-button" onClick={handleLogin}>Log in</button>
        <button className="landing-page__nav-button" onClick={handleSignup}>Sign up</button>
      </div>
      <div className="landing-page__main-content">
        <div className="landing-page__main-content-info">
          <h1>Welcome to K-12</h1>
          <p>
            Your go to benchmark for checking your knowledge on grade level
            content
          </p>
        </div>
        <div className="landing-page__buttons">
          <button className="landing-page__main-button" onClick={handleSignup}>Sign up now</button>
          <button className="landing-page__main-button" onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </div>
  );
}
