import express from 'express';
import cors from 'cors';
import {clerkMiddleware} from '@clerk/express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

import userRoutes from './routes/user.route.js';
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import notificationRoutes from "./routes/notification.route.js";
// import { arcjetMiddleware } from './middleware/arcjet.middleware.js';


const app = express();

connectDB();

// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(clerkMiddleware());
// app.use(arcjetMiddleware());

//routes
app.use("/api/users",userRoutes)
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/notifications", notificationRoutes);


// error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
})



app.get('/', (req, res) => {
  res.send('Hello, World! Server is running.');
});

// app.listen(ENV.PORT,'192.168.29.249', () => {
//   console.log('Server is running on port :', ENV.PORT);
// });

const startServer = async () => {
  try {
    await connectDB();

    // listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT,'192.168.29.249',  () => console.log("Server is up and running on PORT:", ENV.PORT));
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

//export vercel app
export default app;


