const express = require("express")
const User = require("./model")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
require("./backup")
dotenv.config()

const { connectDb } = require("./connectDb")


app.use(express.json())
app.use(cors())

app.post("/users", async (req, res) => {
    try {
        const { name, email } = req.body
        const user = new User({ name, email })
        await user.save()
        return res.json({ success: true, message: "User saved" })
    } catch (error) {
        return res.json({ success: false, message: error.message || "Something went wrong" })
    }
})

app.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        return res.json({ success: true, users })
    } catch (error) {
        return res.json({ success: false, message: error.message || "Something went wrong" })
    }
})


connectDb();

app.listen(4000, () => {
    console.log("⏩ Listening on port 4000...")
})
