module.exports = {
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./data/movies.db3",
	},
	migrations: {
		directory: "./data/migrations",
	},
	seeds: {
		directory: "./data/seeds",
	},
	testing: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/movies-test.db3",
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
}