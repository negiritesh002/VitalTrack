import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import mongoose from "mongoose";



const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const redactMongoUri = (uri: string) =>
  uri.replace(/\/\/([^:@/]+):([^@/]+)@/, "//$1:<password>@");

const startServer = async () => {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is missing. Add it to vitaltrack-backend/.env.");
  }

  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed.");
    console.error(`URI: ${redactMongoUri(MONGO_URI)}`);

    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }

    console.error(
      [
        "Check these Atlas settings:",
        "1. Network Access includes your current public IP address.",
        "2. The database user's password is current and URL-encoded if it contains symbols.",
        "3. The connection string includes a database name, for example /vitaltrack before ?retryWrites.",
        "4. Your Node.js runtime supports TLS 1.2+.",
      ].join("\n"),
    );

    process.exit(1);
  }
};

void startServer();
