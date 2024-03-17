import Images from "../components/Block/Images";
import Logo from '../../public/bootstrap-logo.svg'
import LoginForm from "../components/Block/LoginForm";
import RegisterForm from "../components/Block/RegisterForm";

export default function Register() {
  return (
    <main className="form-signin w-100 m-auto">
      <Images classNames='mb-4' src={Logo} alt='logo' width="72" height="57" />
      <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
      <RegisterForm />
    </main>
  )
}
