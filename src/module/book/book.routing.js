// TODO : NESSCARY ROUTING 
import {addBookController} from "./book.controller.js"
import express from "express"
// TODO : EXPRESS APP 
const API = express.Router()
// http://localhost:4000/book/add
API.post("/add",addBookController)
export default API;

