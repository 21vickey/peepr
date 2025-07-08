import express from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

const app = express();

//connect to database
// connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World! Server is running.');
});

// app.listen(ENV.PORT, () => {
//   console.log('Server is running on port :', ENV.PORT);
// });

const startServer = async () => {
  try {
    await connectDB();

    // listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
