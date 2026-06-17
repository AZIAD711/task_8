// TODO : NESSCARY ROUTING 
import {addBookController,updateBookByYearController} from "./book.controller.js"
import express from "express"
// TODO : EXPRESS APP 
const API = express.Router()
// http://localhost:4000/books/add
API.post("/add",addBookController)
// http://localhost:4000/books/:title
API.patch("/:title",updateBookByYearController)
export default API;

