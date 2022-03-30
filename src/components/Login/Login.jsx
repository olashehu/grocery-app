

import { LoginForm, LoginInput } from "./LoginStyle";

const Login = ({ShowLogin}) => {
  return (
    <LoginForm isLogin={ShowLogin}>
      <h3>login now</h3>
      <LoginInput type="email" placeholder="your email"/>
      <LoginInput type="password" placeholder="your password"/>
      <p>
        forget your password <a href="#">click here</a>
      </p>
      <p>
        don't have an account <a href="#">create now</a>
      </p>
      <input type="submit" value="login now" className="btn" />
    </LoginForm>
  );
}

export default Login