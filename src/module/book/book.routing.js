// TODO : NESSCARY ROUTING 
import {addBookController,updateBookByYearController,getBookByTitleController,getBookByRangeOfYearsController,getBookByGenresController} from "./book.controller.js"
import express from "express"
// TODO : EXPRESS APP 
const API = express.Router()
// http://localhost:4000/books/add
API.post("/add",addBookController)
// http://localhost:4000/books/:title
API.patch("/:title",updateBookByYearController)
// http://localhost:4000/books/title/books?title=bookTitle
API.get("/title/books/",getBookByTitleController)
// http://localhost:4000/books/year/books?from=1990&to=2010 
API.get("/year/books",getBookByRangeOfYearsController)
// http://localhost:4000/books/genre?genre=Science Fiction 
API.get("/genre",getBookByGenresController)
export default API;

