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
        console.log(`❌ ERROR IN GET BOOK BY GENERES SERVICE ${error}`)
    }
}