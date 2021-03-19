const express = require("express")
const Movies = require("./movies-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Movies.find())
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const movie = await Movies.findById(req.params.id)
		if (!movie) {
			return res.status(404).json({
				message: "Movie not found",
			})
		}

		res.json(movie)
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const movie = await Movies.create(req.body)
		res.status(201).json(movie)
	} catch (err) {
		next(err)
	}
})

module.exports = router