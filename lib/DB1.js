import mongoose, { mongo } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

let isConnected = false

async function dbConnect() {

    if (isConnected) {
        console.log("Mongodb is already Connected.")
        return
    }

    try {
        const db = await mongoose.connect(MONGODB_URI)
        isConnected = db.connections[0].readyState === 1
    } catch (error) {
        console.log("Failed to connect to mongodb:", error)
        throw error

    }
}

export default dbConnect