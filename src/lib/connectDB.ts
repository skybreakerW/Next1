import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: Number 
}

const connection: ConnectionObject =  {}

async function connectDB(): Promise<void>{

    if(connection.isConnected){
        console.log("Already connected to DB.");
        return
    }

    try {
        const db = await mongoose.connect(process.env.DB_URI || "")
        connection.isConnected = db.connections[0].readyState
        console.log("Connected to DB.")

    } catch (error) {
        console.log("Error connecting to db!", error)
        process.exit(1)
    }
}

export default connectDB