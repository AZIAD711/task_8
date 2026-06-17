// TODO : NESSCARY ROUTING 
import {addBookController,updateBookByYearController,getBookByTitleController,getBookByRangeOfYearsController,getBookByGenresController,getAllBookController,getAllBookSortByYearController,getAllBooksExcpectSomeValuesController,deleteAllBooksBefore2000Controller,getAllBooksAndSortByYearController} from "./book.controller.js"
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
// http://localhost:4000/books/skip-limit  
API.get("/skip-limit",getAllBookController)
// http://localhost:4000/books/year-integer 
API.get("/year-integer",getAllBookController)
// http://localhost:4000/books/exclude-genres 
API.get("/exclude-genres",getAllBooksExcpectSomeValuesController)
// http://localhost:4000/books/before-year?year=2000  
API.delete("/before-year",deleteAllBooksBefore2000Controller)
// http://localhost:4000/books/aggregate1 
API.get("/aggregate1",getAllBooksAndSortByYearController)
export default API;

