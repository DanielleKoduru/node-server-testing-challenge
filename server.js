const express = require("express")
const cors = require("cors")
const moviesRouter = require("./movies/movies-router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/movies", moviesRouter)
server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server