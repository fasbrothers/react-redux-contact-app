import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const contacts = useSelector((state) => state);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-end">
          <Link to="/add" className="btn btn-outline-dark ">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="bg-dark text-center text-white">
              <tr>
                <th scope="col">№</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                    <button className="btn btn-sm btn-danger mx-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
