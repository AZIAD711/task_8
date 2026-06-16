import Book from "../../model/book.model.js"

// TODO : ADD NEW BOOK 
export const addBookService=async(data)=>{
try {
    return await Book.insertOne(data,{
        validateBeforeSave:true,

    })
} catch (error) {
    console.log(`❌ ERROR IN BOOK SERVICE ${error}`)
}
}