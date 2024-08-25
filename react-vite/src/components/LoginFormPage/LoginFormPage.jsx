import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/home" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/home");
    }
  };

  const demoLogin = async () => {
    const serverResponse = await dispatch(
      thunkLogin({
        email: "demo@aa.io",
        password: "password",
      })
    );
    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/home");
    }
  }

  return (
    <>
      <div className="landing-page__div">
      <div className="landing-page__navbar"></div>
      <div className="landing-page__main-content">
        <div className="landing-page__main-content-info">
          <h1>Log In</h1>
        </div>
      {errors.length > 0 &&
        errors.map((message) => <p className="error" key={message}>{message}</p>)}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">
            Email
            <div>
              <input
                className="form-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
        </div>
        
        {errors.email && <p className="error">{errors.email}</p>}
        <div>

          <label className="form-label">
            Password
            <div>
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
            
          </label>
          </div>
        {errors.password && <p className="error">{errors.password}</p>}
        <div className='login-button-container'>
          <button className="landing-page__main-button" type="submit">Log In</button>
        </div>
        <div className='login-button-container'>
          <button className="landing-page__main-button" onClick={demoLogin}>Demo User</button>
        </div>
      </form>
      </div>
      </div>
    </>
  );
}

export default LoginFormPage;
