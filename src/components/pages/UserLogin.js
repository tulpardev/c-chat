import React, { useState } from "react";
import "../../styles/UserLogin.css";
import cchatLogo from "../../utils/cchatLogo.png";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function UserLogin() {
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));
  }

  async function handleSave(event) {
    event.preventDefault();
    setSubmitted(true);
    console.log(userData);
    try {
      setError("");
      setloading(true);
      await login(userData.email, userData.password);
      history.push("/");
    } catch {
      setError("Kullanıcı adı veya parola yanlış");
    }
    setloading(false);
  }
  return (
    <div className="user__login">
      <div className="container">
        <div className="row">
          <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-lg-6 col-md-10 mx-auto">
                <div className=" p-3 mb-5 login__card">
                  <div className="card-header d-flex flex-column justify-content-center align-items-center">
                    <img
                      className="login__logo"
                      src={cchatLogo}
                      alt="cchatLogo"
                    />
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                  <div className="card-body border-top border-white">
                    <form onSubmit={handleSave}>
                      <div className="form-group">
                        <label className="label" htmlFor="username">
                          Kullanıcı Adı
                        </label>
                        <input
                          type="email"
                          className="form-control border border-danger"
                          name="email"
                          value={userData.email}
                          onChange={handleChange}
                          // eslint-disable-next-line react/jsx-no-duplicate-props
                          className={
                            "form-control" +
                            (submitted && !userData.email ? " is-invalid" : "")
                          }
                        />

                        {submitted && !userData.email && (
                          <div className="invalid-feedback">
                            Kullanıcı adı gereklidir!
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="label" htmlFor="Password">
                          Şifre
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={userData.password}
                          onChange={handleChange}
                          // eslint-disable-next-line react/jsx-no-duplicate-props
                          className={
                            "form-control" +
                            (submitted && !userData.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        {submitted && !userData.password && (
                          <div className="invalid-feedback">
                            Şifre gereklidir!
                          </div>
                        )}
                      </div>
                      <div className="form-group-login-signup">
                        <button type="submit" className="btn btn-primary">
                          Giriş Yap
                        </button>
                        <p className="text-secondary font-italic">
                          veya hesabın yoksa
                        </p>
                        <a
                          href="/signup"
                          role="button"
                          className="btn btn-outline-secondary btn__signup"
                        >
                          Kayıt Ol
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
