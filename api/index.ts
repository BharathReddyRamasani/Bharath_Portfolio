import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

// Chat assistant endpoints have been removed.

// Contact form endpoints removed as contact form relies on direct mailto and social links.

export default app;
