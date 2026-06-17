// TODO : ALL IMPORTS 
import express from "express";
import bookRoutes from "./src/module/book/book.routing.js";
import authorRoutes from "./src/module/auhtor/author.routing.js"
import logRoutes from "./src/module/log/log.routing.js"
const app = express();
app.use(express.json());
// TODO : ALL ROUTES 
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/logs", logRoutes);
export default app;