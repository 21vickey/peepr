import express from 'express';
import cors from 'cors';
import {clerkMiddleware} from '@clerk/express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

import userRoutes from './routes/user.route.js';

const app = express();

// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(clerkMiddleware());

//routes
app.use("/api/users",userRoutes)

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
