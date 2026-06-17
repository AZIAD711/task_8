import {addBookService,updateBookByYearService} from "./book.service.js"
// TODO : ADD NEW BOOK 
export const addBookController = async (request,response)=>{
    try {
        const bookData = await addBookService(request.body)
        return response.status(201).json({"successMessage" : "Book Added Successfully !","bookData" : bookData})
        console.log(bookData)
    } 
    catch (error) {
        console.log(`❌ ERROR IN BOOK CONTROLLER ${error}`)
        return response.status(500).json({"errorMessage" : "Internal Server Error !"})
    }
}
// TODO : UPDATE BOOK BY YEAR
export const updateBookByYearController = async (request,response)=>{
    try{
        const year = request.params.title
        // console.log(request.params.title);
        const updateResult = await updateBookByYearService(year)
        return response.status(200).json({"successMessage" : "Book Updated Successfully !","updateResult" : updateResult})
    }
    catch(error){
        console.log(`❌ ERROR IN UPDATE BOOK BY YEAR CONTROLLER ${error}`)
        return response.status(500).json({"errorMessage" : "Internal Server Error !"})
    }
}