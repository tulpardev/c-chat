import React, { useState } from "react";
import "../../styles/UserLogin.css";
import cchatLogo from "../../utils/cchatLogo.png";

function UserLogin() {
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({ name: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    setSubmitted(true);
    if (userData.name && userData.password) {
      console.log(userData);
    }
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
                    {alert.message && (
                      <div className={`alert ${alert.type}`}>
                        {alert.message}
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
                          type="text"
                          className="form-control border border-danger"
                          name="name"
                          value={userData.name}
                          onChange={handleChange}
                          // eslint-disable-next-line react/jsx-no-duplicate-props
                          className={
                            "form-control" +
                            (submitted && !userData.name ? " is-invalid" : "")
                          }
                        />

                        {submitted && !userData.name && (
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
                      <div className="form-group-signup">
                        <button className="btn btn-primary">Giriş Yap</button>
                        <p className="text-secondary font-italic">
                          veya hesabın yoksa
                        </p>
                        <a href="/signup" role="button" className="btn btn-outline-secondary btn__signup">
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
