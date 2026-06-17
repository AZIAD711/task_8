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
// TODO : UPDATE BOOK BY YEAR 
export const updateBookByYearService=async(data)=>{
    try{
        return await Book.findOneAndUpdate(
            {title : data},
            {$set : {year : 2022}},
        )
    }
    catch(error){
        console.log(`❌ ERROR IN UPDATE BOOK BY YEAR SERVICE ${error}`)
    }
}
// TODO : GET BOOK BY TITLE 
export const getBookByTitleServices= async (data)=>{
    try{
        return await Book.findOne({title : data})
    }
    catch(error){
        console.log(`❌ ERROR IN GET BOOK BY TITLE SERVICE ${error}`)
    }
}