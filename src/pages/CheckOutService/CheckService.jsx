import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CheckService = () => {
  const services = useLoaderData();
  const { title, price,_id } = services;
  const {user} = useContext(AuthContext)
    const handelBookService = e =>{
        e.preventDefault() 
        const form = e.target 
        const name = form.name.value 
        const email = user?.email 
        const date = form.date.value 
        const order ={
            customerName: name,
            email,
            date,
            price: price ,
            service_id : _id,
        }
        console.log(order)
    }
  return (
    <div>
      <h2 className="text-center text-5xl font-bold">Service Name : {title}</h2>

      <form onSubmit={handelBookService}>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            defaultValue={user?.name}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered"
            required
          />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input
            type="text"
            defaultValue={"$" + price}
            name="price"
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
            placeholder="Your Email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
 
        </div>
       </div>
        <div className="form-control mt-6 ">
          <input className="btn btn-block btn-success text-white" type="submit" value="Submit Now" />
        </div>
      </form>
    </div>
  );
};

export default CheckService;
