import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="auth-screen">
      <section className="auth-panel" aria-labelledby="login-title">
        <header className="auth-header">
          <div className="brand-mark" aria-label="TaskMaster">
            TM
          </div>

          <h1 id="login-title">Welcome back</h1>
          <p>Sign in to your account to continue</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>

            <div className="password-control">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              <button
                type="button"
                className="visibility-toggle"
                onClick={() => setPasswordVisible((visible) => !visible)}
                aria-label={
                  passwordVisible ? "Hide password" : "Show password"
                }
              >
                {passwordVisible ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M3 3l18 18M10.6 10.6a2 2 0 102.8 2.8M9.9 4.8A10.8 10.8 0 013 12c2.3 3.5 5.3 5.2 9 5.2 1.3 0 2.5-.2 3.6-.6M14.1 19.2A10.8 10.8 0 0021 12c-1.2-1.8-2.6-3.1-4.3-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-option">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>

            <a href="#forgot-password">Forgot password?</a>
          </div>

          <button className="submit-action" type="submit">
            Log in
          </button>
        </form>

        <footer className="auth-footer">
          <span>Don't have an account?</span>
          <a href="#signup">Sign up</a>
        </footer>
      </section>
    </main>
  );
}