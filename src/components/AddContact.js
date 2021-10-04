import React from "react";

function AddContact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-3 text-center my-5 ">Add Contact</h1>
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
