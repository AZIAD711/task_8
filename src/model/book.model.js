import {Schema,model} from "mongoose"
// TODO : BOOK SCHEMA 
const bookSchema = new Schema({
    // TODO : TITLE 
    title :{
        type : String,
        // TODO : SOME CONTRAINT
        require : true ,
        unique : true ,
        trim : true ,
        maxLength : 200,
        minLength : 3
    },
    // TODO : AUTHOR 
    author :{
        type : String,
        // TODO : SOME CONTRAINT
        require : true ,
        unique : true ,
        trim : true ,
        maxLength : 200,
        minLength : 3
    },
    // TODO : YEAR 
    year :{
        type : Number,
        // TODO : SOME CONTRAINT
        require : true ,
        trim : true ,
        max : 2026,
        min : 1900
    },
    // TODO : GENRES 
    genres :[
        {
        type : String,
        // TODO : SOME CONTRAINT
        require : true ,
        trim : true ,
        maxLength : 100,
        minLength : 5
    },
    ]
},
{
    timestamps : true ,
    strict : true ,
    strictQuery : true, 
    versionKey : "version",
    toJSON:{virtuals:true,getters:true},
    toObject:{virtuals:true,getters:true},
    collection:"book_data"
}
)
// TODO : MODEL OF SCHEMA 
const bookModel = model("Book",bookSchema) 
export default bookModel