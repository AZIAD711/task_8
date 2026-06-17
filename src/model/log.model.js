import {Schema,model} from "mongoose"
// TODO : LOG SCHEMA 
const logSchema = new Schema({
    // TODO : BOOK ID 
    bookId :{
        type : Schema.Types.ObjectId,
        // TODO : SOME CONTRAINT
        require : true ,
        trim : true ,
        maxLength : 200,
        minLength : 3,
        ref : "Book"
    },
    // TODO : ACTION 
    action :{
        type : String,
        // TODO : SOME CONTRAINT
        require : true ,
        enum : ["create","read","update","delete","no action provided"],
        trim : true ,
        maxLength : 200,
        minLength : 3,
        default : "No action provided"
    },
},
{
    timestamps : true ,
    strict : true ,
    strictQuery : true, 
    versionKey : "version",
    toJSON:{virtuals:true,getters:true},
    toObject:{virtuals:true,getters:true},
    collection:"log_data",
    capped : {
        size : 1024 * 1024
    }
}
)
// TODO : MODEL OF SCHEMA 
const logModel = model("Log",logSchema) 
export default logModel