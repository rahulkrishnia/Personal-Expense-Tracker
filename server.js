const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/transactions', require('./routes/transaction.routes'));

app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/expense_tracker';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected correctly');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
