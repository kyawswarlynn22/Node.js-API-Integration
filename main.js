const express = require("express");
const app = express();

app.listen(3000, console.log("Server is running at port 3000"));

app.use(express.json());

const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');

app.use('/users', userRoute);
app.use('/posts', postRoute);
