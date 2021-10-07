import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

function EditContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.number === parseInt(number) && contact.id !== parseInt(id)
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
      id: parseInt(id),
      name,
      number,
      email,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student succesfully updated.");
    history.push("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-3 text-center my-5">Edit Contact {id}</h1>
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
              <div className="input-group">
                <input
                  type="submit"
                  value="Update Student"
                  className="btn btn-block btn-dark mt-3"
                />
                <Link to="/" className="btn btn-danger mt-3 mx-3">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1 className="text-center my-5">Student id {id} is not exist</h1>
      )}
    </div>
  );
}

export default EditContact;
