import { Link } from "react-router-dom";
import signUpImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
    const handelSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email,password)
        .then(result =>{
          const user = result.user 
          console.log(user)
        })
        .catch(error =>{
          console.error(error)
        })
      };
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                name="password"
                className="input input-bordered"
                required
              />
     
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p className="text-center">  Have an account?  <Link className="text-orange-500 font-bold" to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;