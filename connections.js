import mongoose from "mongoose"

mongoose.connection.on("error", (err) => { console.log("ERROR", err)})
mongoose.connection.on("connected", () => console.log("connected"))
mongoose.connection.on("disconnected", () => console.log("disconnected"))

const connectionString = "mongodb://kalaya:password27@localhost:27017/exampledb"

export async function connection() {
    await mongoose.connect(connectionString)
}

export async function disconnection() {
    await mongoose.disconnect()
}