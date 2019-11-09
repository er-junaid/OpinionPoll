const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();
app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/poll', require('./routes/api/poll'));
app.use('/api/result', require('./routes/api/result'));

const PORT = process.env.PORT || 5000;
//remove callback later
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));