exports.seed = async function(knex) {
	await knex("movies").truncate()
	await knex("movies").insert([
		{ name: "The Lord of the Rings" },
		{ name: "The Hobbit" },
		{ name: "Skyfall" },
		{ name: "Mission Impossible" },
	])
}
