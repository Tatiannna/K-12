import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { thunkSignup, thunkLogin } from "../../redux/session";
import "./SignupForm.css";


function SignupFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/");
    }
  };

  const handleLogin = () => {
    navigate("/login")
  }

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
        <div className="signup-page__main-content">
          <div className="signup-page-left">
            <div className="landing-page__main-content-info">
              <h1>Sign Up</h1>
            </div>
            {errors.server && <p className="error">{errors.server}</p>}
            <form className="signup-form" onSubmit={handleSubmit}>
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

              {errors.email && <p className="error">{errors.email}</p>}

              <label className="form-label">
                Username
                <div>
                  <input
                    className="form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  </div>
              </label>

              {errors.username && <p className="error">{errors.username}</p>}

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

              {errors.password && <p className="error">{errors.password}</p>}

              <label className="form-label">
                Confirm Password
                <div>
                  <input
                    className="form-input"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </label>

              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

              <div className='login-button-container'>
                <button className="landing-page__main-button" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
          <div className="signup-page-right">
            <div className="landing-page__buttons">
              <button className="landing-page__main-button" onClick={demoLogin}>Demo User</button>
              <button className="landing-page__main-button" onClick={handleLogin}>Login Page</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
