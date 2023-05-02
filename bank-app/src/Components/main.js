/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

const data = [];

const mystyle = {
  color: "black",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  minHeight: "100vh",
};

function Main() {
  const [users, setUsers] = useState(data);
  const [username, setusename] = useState("");
  const [accountnumber, setaccountnumber] = useState("");
  const [accountype, setaccountype] = useState("");

  const [counter, setCounter] = useState(0);

  function handleCounter(event) {
    setCounter(counter + 1);
  }

  const handleChangeUserName = (event) => {
    const userName = event.target.value;
    setusename(userName);
  };
  const handleChangeAccountNumber = (event) => {
    const accountNumber = event.target.value;
    setaccountnumber(accountNumber);
  };
  const handleChangeAccountType = (event) => {
    const accounType = event.target.value;
    setaccountype(accounType);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) return;
    const newUser = {
      counter,
      username,
      accountnumber,
      accountype,
    };
    const updateUsers = [...users, newUser];
    setUsers(updateUsers);
    console.log("fahmi");
    setusename("");
  };

  const handleRemove = (id) => {
    const updateUsers = users.filter((person) => person.counter !== id);
    // setCounter(counter - 1);
    setUsers(updateUsers);
    // console.log(updateUsers);
  };

  return (
    <div style={mystyle}>
      <main style={{}}>
        <div className="d-flex main container-fluid mt-5">
          <form className="w-50" id="inputForm" onSubmit={handleSubmit}>
            <fieldset>
              <legend className="fw-bold fs-2 text-balck">Registration</legend>
              <div className="mb-3">
                <label className="form-label fs-5 text-balck">User Name</label>
                <input
                  type="text"
                  className="form-control fs-5"
                  id="Name"
                  name="username"
                  onChange={handleChangeUserName}
                  value={username}
                  required
                  
                />
              </div>
              <div className="mb-3">
                <label className="form-label fs-5 text-balck">Number</label>
                <input
                  type="text"
                  className="form-control fs-5"
                  id="accountnumber"
                  name="accountnumber"
                  onChange={handleChangeAccountNumber}
                  value={accountnumber}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fs-5 text-black">
                  Account Type
                </label>
                <select
                  className="form-select fs-5"
                  name="accountype"
                  onChange={handleChangeAccountType}
                  value={accountype}
                  required
                >
                  <option style={{display:"none"}}>Account Type</option>
                  <option>Savings</option>
                  <option>Student accounts</option>
                  <option>Third choice</option>
                  <option>Fourth choice</option>
                </select>
              </div>
              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={handleCounter}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="container d-flex flex-wrap justify-content-center">
          {users.map((user) => {
            return (
              <div className=" mb-3 pt-5">
                <div className="d-flex flex-row ">
                  <div className="card me-5 mb-3">
                    <img
                      src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                      className="card-img-top"
                    />
                    <div className="d-flex flex-column card-body">
                      <h3 className="card-text">User Name : {user.username}</h3>
                      <ul className="list-group">
                        <li className="list-group-item"> ID: {user.counter}</li>
                        <li className="list-group-item">
                          Account Number :{user.accountnumber}
                        </li>
                        <li className="list-group-item">
                          Account Type : {user.accountype}
                        </li>
                      </ul>
                      <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={() => handleRemove(user.counter)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Main;
