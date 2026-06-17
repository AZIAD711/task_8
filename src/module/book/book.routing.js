// TODO : NESSCARY ROUTING 
import {addBookController,updateBookByYearController,getBookByTitleController} from "./book.controller.js"
import express from "express"
// TODO : EXPRESS APP 
const API = express.Router()
// http://localhost:4000/books/add
API.post("/add",addBookController)
// http://localhost:4000/books/:title
API.patch("/:title",updateBookByYearController)
// http://localhost:4000/books/title/books?title=bookTitle
API.get("/title/books/",getBookByTitleController)
export default API;

