import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <>
        <form>
          <label>
            Brugernavn:
            <input></input>
          </label>
          <button onClick={() => loginWithRedirect}>Login</button>
        </form>
      </>
    );
  }
}
