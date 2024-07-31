require('dotenv').config();
const { loggerMiddleware } = require('./middlewares/logger');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
const authRoute = require('./routes/auth');


// Middlewares
app.use(loggerMiddleware); // Executes logger middleware for every request before the route handler
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

