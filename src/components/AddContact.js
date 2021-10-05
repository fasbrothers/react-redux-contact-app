import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import nextId from "react-id-generator";
import { useHistory } from "react-router";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const htmlId = nextId();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );
    if (!name || !email || !number) {
      return toast.warning("Please, fill all of required places!");
    }
    if (checkEmail) {
      return toast.error("This email is already using!");
    }
    if (checkNumber) {
      return toast.error("This number is already using!");
    }

    const data = {
      id: htmlId,
      name,
      number,
      email,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student succesfully added.");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-3 text-center my-5 ">Add Contact</h1>
        </div>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control my-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                placeholder="Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="input-group d-grid ">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark mt-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
