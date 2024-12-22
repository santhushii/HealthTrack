const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// SQLite database connection
const db = new sqlite3.Database('healthtrack.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Example route
app.get('/', (req, res) => {
  res.send('HealthTrack Backend is running!');
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
