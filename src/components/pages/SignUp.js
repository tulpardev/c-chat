import React, { useState, useRef } from "react";
import cchatLogo from "../../utils/cchatLogo.png";
import { useAuth } from "../../contexts/AuthContext";

function SignUp() {
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({ name: "", password: "" });
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  const userNameRef = useRef();
  const passwordRef = useRef();
  const passwordVerificationRef = useRef();

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));
  }

  async function handleSave(event) {
    event.preventDefault();
    if (passwordRef.current.value !== passwordVerificationRef.current.value) {
      return setError("Şifreler eşleşmiyor");
    }

    try {
      setError("");
      setloading(true);
      await signup(userNameRef.current.value, passwordRef.current.value);
    } catch {
      setError("Kullanıcı Oluşturulamadı");
    }
    setloading(false);
  }

  return (
    <div>
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
                      {/* {alert.message && (
                        <div className={`alert ${alert.type}`}>
                          {alert.message}
                        </div>
                      )} */}
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
                            ref={userNameRef}
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
                            ref={passwordRef}
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
                        <div className="form-group">
                          <label className="label" htmlFor="Password">
                            Şifreni Doğrula
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            ref={passwordVerificationRef}
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
                          <button type="submit" className="btn btn-primary">
                            Kayıt Ol
                          </button>
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
    </div>
  );
}

export default SignUp;
