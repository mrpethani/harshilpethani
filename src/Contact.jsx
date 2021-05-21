import React, { useState } from 'react';
import './App.css';

function Contact() {
  const [data,setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  }); 

  const InputEvent = (event) =>{
    const {name, value} = event.target; 

    setData((preData)=> {
      return{
        ...preData,
        [name]: value,
      };
    });
  }

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`Your Name is : ${data.fullname}. Your Mobile No. is : ${data.phone}. Your Email is : ${data.email}. Your MSG is : ${data.msg}`);
   }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input required type="text" className="form-control" id="fullname" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Full Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Mobile No.</label>
                <input type="number" className="form-control" id="phone" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Mobile Number" />    
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="name@gmail.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="msg" value={data.msg} onChange={InputEvent} placeholder="Enter Your Message" className="form-control" id="message" rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className="btn project-btn submit-form-btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ >
  );   
}

export default Contact;


