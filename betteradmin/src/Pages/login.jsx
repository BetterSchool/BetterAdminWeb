import {useKindeAuth} from '@kinde-oss/kinde-auth-react';

export default function Login() {
  const { login, isAuthenticated,  register } = useKindeAuth();
  if (!isAuthenticated) {
    return (
      <>
        <button onClick={register} type="button">Sign up</button>
        <button onClick={login} type="button">Sign In</button>
        
      </>
    );
  }
  
}
