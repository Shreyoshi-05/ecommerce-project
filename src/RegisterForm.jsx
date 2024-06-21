import React, { useEffect, useState } from "react";

const RegisterForm = () => {
  const [users, setUsers] = useState([]);

  const [data, setData] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  useEffect(() => {
    const usersInList = JSON.parse(localStorage.getItem("users"));
    if (usersInList !== null) {
      setUsers(usersInList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsers([...users , data]);
    setData({ name: "", gmail: "", password: "" });
  }

  console.log("data:", data, "users:", users);

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div id="name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div id="gmail">
          <label htmlFor="gmail">Gmail:</label>
          <input
            type="email"
            name="gmail"
            value={data.gmail}
            onChange={handleChange}
          />
        </div>

        <div id="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
