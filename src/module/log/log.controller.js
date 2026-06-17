import {addLogService} from "./log.service.js"
// TODO : ADD NEW LOG 
export const addLogController = async (request,response)=>{
    try {
        const logData = await addLogService(request.body)
        return response.status(201).json({"successMessage" : "Log Added Successfully !","logData" : logData})
        console.log(logData)
    } 
    catch (error) {
        console.log(`❌ ERROR IN LOG CONTROLLER ${error}`)
        return response.status(500).json({"errorMessage" : "Internal Server Error !"})
    }
}