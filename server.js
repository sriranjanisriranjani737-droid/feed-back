const express = require('express');

const cors = require('cors');

const pool = require('./db');

require('dotenv').config();

 

const app = express();

const PORT = process.env.PORT || 3001;

 

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

 

app.post("/submit", async (req, res) => {

  const { name, feedback } = req.body;

  try {

    await pool.query(

      "INSERT INTO feedback (name, feedback) VALUES ($1, $2)",

      [name, feedback]

    );

    res.json({ message: "Feedback submitted!" });

  } catch (err) {

    console.error(err.message);

    res.status(500).json({ message: "Error submitting feedback." });

  }

});

 

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});
