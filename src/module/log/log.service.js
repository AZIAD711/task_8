import Log from "../../model/log.model.js"

// TODO : ADD NEW LOG 
export const addLogService=async(data)=>{
try {
    return await Log.insertOne(data,{
        validateBeforeSave:true,

    })
} catch (error) {
    console.log(`❌ ERROR IN LOG SERVICE ${error}`)
}
}