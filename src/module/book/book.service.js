import Book from "../../model/book.model.js"

// TODO : ADD NEW BOOK 
export const addBookService = async (data) => {
    try {
        return await Book.create([...data], {
            validateBeforeSave: true,

        })
    } catch (error) {
        console.log(`❌ ERROR IN BOOK SERVICE ${error}`)
    }
}
// TODO : UPDATE BOOK BY YEAR 
export const updateBookByYearService = async (data) => {
    try {
        return await Book.findOneAndUpdate(
            { title: data },
            { $set: { year: 2022 } },
        )
    }
    catch (error) {
        console.log(`❌ ERROR IN UPDATE BOOK BY YEAR SERVICE ${error}`)
    }
}
// TODO : GET BOOK BY TITLE 
export const getBookByTitleServices = async (data) => {
    try {
        return await Book.findOne({ title: data })
    }
    catch (error) {
        console.log(`❌ ERROR IN GET BOOK BY TITLE SERVICE ${error}`)
    }
}
// TODO : GET BOOK BY RANGE OF YEARS 
export const getBookByRangeOfYearsServices = async (from, to) => {
    try {
        return await Book.find({
            year: { $gte: Number(from), $lte: Number(to) }
        })
    }
    catch (error) {
        console.log(`❌ ERROR IN GET BOOK BY RANGE OF YEARS SERVICE ${error}`)
    }
}
// TODO : GET BOOKS BY GENERES 
export const getBooksByGenresServices = async (data) => {
    try {
        return await Book.find(
            {
                "genres": data
            }
        )
    }
    catch (error) {
        console.log(`❌ ERROR IN GET BOOK BY GENERES SERVICE ${error}`)
    }
}
// TODO : GET ALL BOOKS 
export const getAllBooksServices = async () => {
    try {
        return await Book.find().skip(2).limit(3).sort({year:-1})
    }
    catch (error) {
        console.log(`❌ ERROR IN GET BOOKS SERVICE ${error}`)
    }
}
// TODO : GET ALL BOOKS BY SORT YEAR
export const getAllBooksBySortYearServices = async () => {
    try {
        return await Book.find({
            year:{$type:int}
        }).sort({year:-1})
    }
    catch (error) {
        console.log(`❌ ERROR IN GET BOOK SORTED BY YEAR SERVICE ${error}`)
    }
}
// TODO : GET ALL BOOKS EXCLUDED "Horror" AND "Science Fiction"
export const getAllBooksExcpectSomeValuesServices = async () => {
    try {
        return await Book.find(
            {
                genres:{
                    $nin : ["Horror","Science Fiction"]
                }
            }
        )
    }
    catch (error) {
        console.log(`❌ ERROR IN GET BOOKS EXCPECT SOME VALUES SERVICE ${error}`)
    }
}
// TODO : DELETE ALL BOOKS BEFORE 2000
export const deleteAllBooksBefore2000Services = async () => {
    try {
        return await Book.deleteMany({
            year:{
                $lte : 2000
            }
        })
    }
    catch (error) {
        console.log(`❌ ERROR IN DELETE BOOKS SERVICE ${error}`)
    }
}
// TODO : GET ALL BOOKS AFTER 2000 AND SORT THEM BY YEAR 
export const getAllBooksAndSortByYearServices = async () => {
    try {
        return await Book.find({
            year:{
                $gte : 2000
            }
        }).sort({year:-1})
    }
    catch (error) {
        console.log(`❌ ERROR IN DELETE BOOKS SERVICE ${error}`)
    }
}
// TODO : GET ALL BOOKS AFTER 2000 AND SORT THEM BY YEAR AND SHOW ONLY (TITLE,AUTHOR,YEAR) 
export const getAllBooksAndSortByYearAndShowSomeFieldsServices = async () => {
    try {
        return await Book.find({
            year:{
                $gte : 2000
            }
        }).sort({year:-1}).select("title author year -_id")
    }
    catch (error) {
        console.log(`❌ ERROR IN DELETE BOOKS SERVICE ${error}`)
    }
}
// TODO : SEPERATE ALL ARRAY OF GENRS INOT SINLAGE DOCUMENT 
export const separateGenresIntoSingleDocumentServices = async () => {
    try {
        return await Book.aggregate([{
            $unwind : "$genres"
        }])
    }
    catch (error) {
        console.log(`❌ ERROR IN UNWIND SERVICE ${error}`)
    }
}
// TODO : GET ALL BOOKS WITH LOGS
export const getAllBooksWithLogsService = async () => {
    try {
        return await Book.aggregate([{
           $lookup:{
                from: "log_data",          
                localField: "_id",     
                foreignField: "bookId",
                as:"log_data"
           }
        }])
    }
    catch (error) {
        console.log(`❌ ERROR IN LOGS WITH BOOKS SERVICE ${error}`)
    }
}