const express = require("express");
const app = express();

app.listen(3000, console.log("Server is running at port 3000"));

app.use(express.json());

let users = [
  { id: 1, name: "Ko Ko", age: 20 },
  { id: 2, name: "Nyi Nyi", age: 21 },
  { id: 3, name: "Lay maung", age: 22 },
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  let user = users.find((usr) => usr.id == id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.json({ mes: "This user is not in list." });
  }
});

app.post("/users", (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let age = req.body.age;

  let username = {
    id: id,
    name: name,
    age: age,
  };
  users.push(username);
  res.status(200).json(users);
});

app.patch("/users/:id", (req, res) => {
  let id = req.params.id;
  let editUser = users.find((usr) => usr.id == id);

  if (editUser) {
    editUser.name = req.body.name;
    res.status(200).json(users);
  } else {
    res.json({ Mes: "user not found." });
  }
});

app.delete("/users/:id", (req, res) => {
  let id = req.params.id;
  users = users.filter((usr) => usr.id != id);
  res.status(200).json(users);
});

app.get("*", (req, res) => {
  res.json({ msg: "rout not in list." });
});
