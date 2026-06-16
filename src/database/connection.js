import mongoose from "mongoose"

export const connectionOfDatabase=async()=> {
    // TODO : DATABASE CONNECTION OF URL 
    const databaseUrl = "mongodb://localhost:27017/route_task_8"
    // TODO : CHECK CONNECTION OF DATABASE
    try{
        await mongoose.connect(databaseUrl,{
            serverSelectionTimeoutMS: 6000,
            maxPoolSize:10
        })
        console.log("✅ Successfully connected to database with mongoose DB")
    }
    catch(error){
        console.error("❌ Error connecting to database:", error)
    }
}