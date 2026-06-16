import { Schema, model, version } from "mongoose"
// TODO : AUHTOR SCHEMA 
const authorSchema = new Schema({
    // TODO : NAME 
    name: {
        type: String,
        require: true,
        trim: true,
        maxlength: 200,
        minlength: 3
    },
    // TODO : NATIOLITY 
    nationality: {
        type: String,
        require: true,
        trim: true,
        maxlength: 200,
        minlength: 3
    },
},
    {
        timestamp: true,
        strict: true,
        collection: "author_data",
        versionKey: "version",
        strictQuery: true, toJSON: { virtuals: true, getters: true },
        toObject: { virtuals: true, getters: true },

    }
)
const auhtorModel = model("Author", authorSchema)
export default auhtorModel