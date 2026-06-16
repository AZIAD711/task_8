import Author from "../../model/author.model.js"

// TODO : ADD NEW AUTHOR 
export const addAuthorService=async(data)=>{
try {
    return await Author.insertOne(data,{
        validateBeforeSave:true,

    })
} catch (error) {
    console.log(`❌ ERROR IN AUTHOR SERVICE ${error}`)
}
}