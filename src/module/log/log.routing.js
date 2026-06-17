// TODO : NESSCARY ROUTING 
import {addLogController} from "./log.controller.js"
import express from "express"
// TODO : EXPRESS APP 
const API = express.Router()
// http://localhost:4000/logs/add
API.post("/add",addLogController)
export default API;