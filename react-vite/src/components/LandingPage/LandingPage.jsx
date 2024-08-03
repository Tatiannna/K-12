import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page__div">
      <div className="landing-page__navbar">
        <button>Login</button>
        <button>Signup</button>
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
          <button>Signup</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
