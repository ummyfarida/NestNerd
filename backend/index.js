import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

// const express = require('express');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// app.get('/api', (req, res) => {
//   res.send({ message: 'Hello from Express!' });
// });

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`);
});