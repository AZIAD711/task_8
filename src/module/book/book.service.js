import Book from "../../model/book.model.js"

// TODO : ADD NEW BOOK 
export const addBookService=async(data)=>{
try {
    return await Book.create([...data],{
        validateBeforeSave:true,

    })
} catch (error) {
    console.log(`❌ ERROR IN BOOK SERVICE ${error}`)
}
}