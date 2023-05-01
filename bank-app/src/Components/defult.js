import { useState } from "react";
const data = [
  // { id: 1, name: "Fahmi" },
  // { id: 2, name: "Obida" },
  // { id: 3, name: "Abed" },
];

function UserChallenge() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    // console.log("form Submitted");
    // console.log(fakeId);
    const newUser = { id: fakeId, name };
    const ubdatedUsers = [...users, newUser];
    setUsers(ubdatedUsers);
    if (!name) return;
    setName("");
  };

  const removeUser = (id) => {
    const updateUsers = users.filter((person) => person.id !== id);
    setUsers(updateUsers);
  };
  return (
    <div className="container-fluid d-flex flex-column justify-content-center ">
      <form className="form mb-5" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-danger">
          submit
        </button>
      </form>
      <h4>Users</h4>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => removeUser(user.id)}
            >Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default UserChallenge;
