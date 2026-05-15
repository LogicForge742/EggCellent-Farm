import { Header } from '../components/Header.js';

export const LoginPage = () => `
  ${Header()}
  <div class="auth-wrapper">
    <div class="auth-card card">
      <div class="auth-header">
        <h1>Welcome Back</h1>
        <p>Manage your farm with enterprise precision</p>
      </div>
      <form id="login-form" class="auth-form">
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="name@company.com" required>
        </div>
        <div class="form-group">
          <div class="label-row">
            <label>Password</label>
            <a href="#" class="forgot-link">Forgot?</a>
          </div>
          <input type="password" placeholder="••••••••" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Sign In</button>
        
        <div class="auth-divider">
          <span>or continue with</span>
        </div>

        <div class="social-auth-grid">
          <button type="button" class="btn btn-outline btn-social">G Google</button>
          <button type="button" class="btn btn-outline btn-social">f Facebook</button>
        </div>
      </form>
      <div class="auth-footer">
        <p>Don't have an account? <a href="/signup" data-link>Sign Up</a></p>
      </div>
    </div>
  </div>
`;
