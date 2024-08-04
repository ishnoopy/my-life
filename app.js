const { loggerMiddleware } = require('./middlewares/logger');
const { port } = require('./config/config');

const express = require('express');
const app = express();


app.use(express.json());

// Routes
const authRoute = require('./routes/auth.routes');
const userRoute = require('./routes/user.routes');
const postRoute = require('./routes/post.routes');

// Middlewares
app.use(loggerMiddleware); // Executes logger middleware for every request before the route handler
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/posts', postRoute);

// Error handling middleware for invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Invalid route' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

