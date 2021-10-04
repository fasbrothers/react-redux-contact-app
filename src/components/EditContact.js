import React from "react";
import { Link } from "react-router-dom";

function EditContact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-3 text-center my-5">Edit Contact</h1>
        </div>
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="input-group">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control my-3"
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                placeholder="Number"
                className="form-control"
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
    </div>
  );
}

export default EditContact;
