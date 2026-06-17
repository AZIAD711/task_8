import { addBookService, updateBookByYearService, getBookByTitleServices, getBookByRangeOfYearsServices,getBooksByGenresServices,getAllBooksServices,getAllBooksBySortYearServices ,getAllBooksExcpectSomeValuesServices,deleteAllBooksBefore2000Services} from "./book.service.js"
// TODO : ADD NEW BOOK 
export const addBookController = async (request, response) => {
    try {
        const bookData = await addBookService(request.body)
        return response.status(201).json({ "successMessage": "Book Added Successfully !", "bookData": bookData })
        console.log(bookData)
    }
    catch (error) {
        console.log(`❌ ERROR IN BOOK CONTROLLER ${error}`)
        return response.status(500).json({ "errorMessage": "Internal Server Error !" })
    }
}
// TODO : UPDATE BOOK BY YEAR
export const updateBookByYearController = async (request, response) => {
    try {
        const year = request.params.title
        const updateResult = await updateBookByYearService(year)
        return response.status(200).json({ "successMessage": "Book Updated Successfully !", "updateResult": updateResult })
    }
    catch (error) {
        console.log(`❌ ERROR IN UPDATE BOOK BY YEAR CONTROLLER ${error}`)
        return response.status(500).json({ "errorMessage": "Internal Server Error !" })
    }
}
// TODO : GET BOOK BY TITLE
export const getBookByTitleController = async (request, response) => {
    try {
        const title = request.query.title
        const book = await getBookByTitleServices(title)
        return response.status(200).json({ "successMessage": "Book Found Successfully !", "book": book })
    }
    catch (error) {
        console.log(`❌ ERROR IN GET BOOK BY TITLE CONTROLLER ${error}`)
        return response.status(500).json({ "errorMessage": "Internal Server Error !" })
    }
}
// TODO : GET BOOK BY RAGE OF YEARS
export const getBookByRangeOfYearsController = async (request, response) => {
    try {
        const {from,to} = request.query
        const book = await getBookByRangeOfYearsServices(from,to)
        return response.status(200).json({ "successMessage": "Book Found Successfully !", "book": book })
    }
    catch (error) {
        console.log(`❌ ERROR IN GET BOOK BY TITLE CONTROLLER ${error}`)
        return response.status(500).json({ "errorMessage": "Internal Server Error !" })
    }
}
// TODO : GET BOOK BY GENRES
export const getBookByGenresController = async (request, response) => {
    try {
        const {genre} = request.query
        const book = await getBooksByGenresServices(genre)
        return response.status(200).json({ "successMessage": "Book Found Successfully !", "book": book })
    }
    catch (error) {
        console.log(`❌ ERROR IN GET BOOK BY TITLE CONTROLLER ${error}`)
        return response.status(500).json({ "errorMessage": "Internal Server Error !" })
    }
}
// TODO : GET ALL BOOKS
export const getAllBookController = async (request, response) => {
    try {
        const book = await getAllBooksServices()
        return response.status(200).json({ "successMessage": "All Books Fetched Successfully !", "book": book })
    }
    catch (error) {
        console.log(`❌ ERROR IN GET ALL BOOKS CONTROLLER ${error}`)
        return response.status(500).json({ "errorMessage": "Internal Server Error !" })
    }
}
// TODO : GET ALL BOOKS BY SORT YEAR
export const getAllBookSortByYearController = async (request, response) => {
    try {
        const book = await getAllBooksBySortYearServices()
        return response.status(200).json({ "successMessage": "All Books Fetched Successfully !", "book": book })
    }
    catch (error) {
        console.log(`❌ ERROR IN GET ALL BOOKS CONTROLLER ${error}`)
        return response.status(500).json({ "errorMessage": "Internal Server Error !" })
    }
}
// TODO : GET ALL BOOKS EXCLUDED "Horror" AND "Science Fiction"
export const getAllBooksExcpectSomeValuesController = async (request, response) => {
    try {
        const book = await getAllBooksExcpectSomeValuesServices()
        return response.status(200).json({ "successMessage": "All Books Fetched Successfully !", "book": book })
    }
    catch (error) {
        console.log(`❌ ERROR IN GET ALL BOOKS CONTROLLER ${error}`)
        return response.status(500).json({ "errorMessage": "Internal Server Error !" })
    }
}
// TODO : DELETE ALL BOOKS BEFORE 2000
export const deleteAllBooksBefore2000Controller = async (request, response) => {
    try {
        const book = await deleteAllBooksBefore2000Services()
        return response.status(200).json({ "successMessage": "All Books Deleted Successfully !", "book": book })
    }
    catch (error) {
        console.log(`❌ ERROR IN GET ALL BOOKS CONTROLLER ${error}`)
        return response.status(500).json({ "errorMessage": "Internal Server Error !" })
    }
}