import Images from "../components/Block/Images";
import Logo from '../../public/bootstrap-logo.svg'
import LoginForm from "../components/Block/LoginForm";
import { Link } from "react-router-dom";
export default function Login() {
  return (

    <main className="form-signin w-100 m-auto">
      <Images classNames='mb-4' src={Logo} alt='logo' width="72" height="57" />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <LoginForm />
      <Link to='/register' >Sign up</Link>
    </main>

  )
}
