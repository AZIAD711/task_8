import express from "express";
import bookRoutes from "./src/module/book/book.routing.js";
// import authorRoutes from "./src/module/auhtor/";
const app = express();

app.use(express.json());

app.use("/books", bookRoutes);
// app.use("/authors", authorRoutes);
export default app;