import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase';
import { Result } from 'postcss';
import { useState } from 'react';

const SignIn = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleSingin = () => {
    console.log('google sing in handle working fine');

    signInWithPopup(auth, provider)
      .then(result => {
        const logedUser = result.user;

        console.log(logedUser);

        setUser(logedUser);
      })
      .catch(error => console.error(error));
  };
  console.log('coming from user state ', user);
  return (
    <div className="flex items-center justify-center  max-w-6xl mx-auto min-h-[calc(100vh-116px)] mt-10">
      <div className="hero min-h-screen bg-base-200 shadow-xl rounded-lg ">
        <div className="hero-content flex-col lg:flex-col-reverse ">
          <div className="text-center px-20 mt-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10 ">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            {/* google login bkutton's handler */}
            <button
              onClick={handleGoogleSingin}
              className="btn text-white bg-pink-300 hover:bg-pink-500  btn-outline m-10"
            >
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
