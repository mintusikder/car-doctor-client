import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const BookServices = () => {
  const service = useLoaderData();
  const { title, price, _id } = service;
  const { user } = useContext(AuthContext);
  const handelBookOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email
    const date = form.date.value;
    const order = {
      customerName: name,
      email,
      date,
      service_id: _id,
      price: price,
    };
    console.log(order);
  };
  return (
    <div>
      <>
        <Banner></Banner>
        <h2 className="text-center text-3xl">Book Service: {title}</h2>

        <form onSubmit={handelBookOrder}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  defaultValue={user?.displayName}
                  placeholder="name"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="Date"
                  name="date"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  defaultValue={"$" + price}
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
                  defaultValue={user?.email}
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
    </div>
  );
};

export default BookServices;
