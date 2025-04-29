import { FaEye } from "react-icons/fa";
import SignInButton from "./SignInButton";
import { signInAction } from "../lib/actions";

function LoginForm() {
  return (
    <form className="flex flex-col gap-3" action={signInAction}>
      <SignInButton />
    </form>
  );
}

export default LoginForm;
