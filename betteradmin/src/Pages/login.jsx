import {useKindeAuth} from '@kinde-oss/kinde-auth-react';

export default function Login() {
  const { login, isAuthenticated,  register } = useKindeAuth();
  if (!isAuthenticated) {
    return (
      <div>
        <h1>Det lader til du ikke er logget ind, vælg en af de følgende muligheder</h1>
        <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={register} type="button">Register</button>
        <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={login} type="button">Login</button>
      </div>
    );
  }
  if (isAuthenticated) {
    return (
      <>
        <h1>Det lader du du er logget ind.</h1>
        <span>Kom til <a className='font-semibold' href='/user/home/'>forsiden</a> her</span>
      </>
    );
  }
  
}
