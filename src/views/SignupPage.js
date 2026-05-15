import { Header } from '../components/Header.js';

export const SignupPage = () => `
  ${Header()}
  <div class="auth-wrapper">
    <div class="auth-card card">
      <div class="auth-header">
        <h1>Create Account</h1>
        <p>Start your enterprise poultry journey today</p>
      </div>
      <form id="signup-form" class="auth-form">
        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" placeholder="John" required>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Doe" required>
          </div>
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="name@company.com" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Create Account</button>
        
        <div class="auth-divider">
          <span>or join with</span>
        </div>

        <div class="social-auth-grid">
          <button type="button" class="btn btn-outline btn-social">G Google</button>
          <button type="button" class="btn btn-outline btn-social">f Facebook</button>
        </div>
      </form>
      <div class="auth-footer">
        <p>Already have an account? <a href="/login" data-link>Login</a></p>
      </div>
    </div>
  </div>
`;
