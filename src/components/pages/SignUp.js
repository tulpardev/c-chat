import React, { useState, useRef } from "react";
import cchatLogo from "../../utils/cchatLogo.png";
import { useAuth } from "../../contexts/AuthContext";
import "../../styles/UserLogin.css";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [submitted, setSubmitted] = useState(false);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordVerificationRef = useRef();

  async function handleSave(event) {
    event.preventDefault();
    setSubmitted(true);
    console.log(emailRef.current.value, passwordRef.current.value);
    if (passwordRef.current.value !== passwordVerificationRef.current.value) {
      return setError("Şifreler eşleşmiyor");
    }

    try {
      setError("");
      setloading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
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
                            ref={emailRef}
                            required
                            // eslint-disable-next-line react/jsx-no-duplicate-props
                          />
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
                            required
                            // eslint-disable-next-line react/jsx-no-duplicate-props
                          />
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
                            required
                            // eslint-disable-next-line react/jsx-no-duplicate-props
                          />
                        </div>
                        <div className="form-group-signup">
                          <button
                            disabled={loading}
                            type="submit"
                            className="btn btn-primary"
                          >
                            Kayıt Ol
                          </button>
                          <a
                            href="/login"
                            role="button"
                            className="btn btn-outline-secondary btn__signup"
                          >
                            İptal
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
    </div>
  );
}

export default SignUp;
