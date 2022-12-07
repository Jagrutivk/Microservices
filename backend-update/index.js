const express = require("express");
const app = express();
const axios = require('axios');
const cors = require("cors");
app.use(cors());



//update task

app.put("/tasks/update/:id", async (req, res) => {

    console.log ("Data updated succeessfully");

  try {
    const response = await axios ({
      url: 'http://localhost:5000/tasks',
      method: "put",
    });
   

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message:err});
    console.log ("Data fetched succeessfully");
  }
});

const port = 8000;
app.listen(port, () => {
  console.log("Express listening at 8000");
});