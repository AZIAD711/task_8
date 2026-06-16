import {addBookService} from "./book.service.js"
// TODO : ADD NEW BOOK 
export const addBookController = async (request,response)=>{
    try {
        // console.log(request.body)
        const bookData = await addBookService(request.body)
        return response.status(201).json({"successMessage" : "Book Added Successfully !","bookData" : bookData})
        console.log(bookData)
    } 
    catch (error) {
        console.log(`❌ ERROR IN BOOK CONTROLLER ${error}`)
        return response.status(500).json({"errorMessage" : "Internal Server Error !"})
    }
}