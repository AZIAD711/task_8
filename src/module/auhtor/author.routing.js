// TODO : NESSCARY ROUTING 
import {addAuthorController} from "./author.controller.js"
import express from "express"
// TODO : EXPRESS APP 
const API = express.Router()
// http://localhost:4000/authors/add
API.post("/add",addAuthorController)
export default API;