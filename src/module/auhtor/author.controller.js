import {addAuthorService} from "./author.services.js"
// TODO : ADD NEW AUHTOR 
export const addAuthorController = async (request,response)=>{
    try {
        const authorData = await addAuthorService(request.body)
        return response.status(201).json({"successMessage" : "Author Added Successfully !","authorData" : authorData})
        console.log(authorData)
    } 
    catch (error) {
        console.log(`❌ ERROR IN AUTHOR CONTROLLER ${error}`)
        return response.status(500).json({"errorMessage" : "Internal Server Error !"})
    }
}