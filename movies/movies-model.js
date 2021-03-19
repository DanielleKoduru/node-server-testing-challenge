const db = require("../data/config")

function find() {
	return db("movies")
}

function findById(id) {
	return db("movies").where({ id }).first()
}

async function create(data) {
	const [id] = await db("movies").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("movies").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("movies").where({ id }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
}