import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;
  return (
    <>
      <Banner />
      <h2>Book Service: {title}</h2>

      <form>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
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
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
          
                required
              />
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-warning btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </>
  );
};

export default CheckOut;
