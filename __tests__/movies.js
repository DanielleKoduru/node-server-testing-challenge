const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

afterAll(async () => {
    // close the database connection
    await db.destroy()
})

describe("movies integration tests", () => {
    it("gets a list of movies", async () => {
        const res = await supertest(server).get("/movies")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThanOrEqual(4)
        expect(res.body[0].id).toBe(1)
        expect(res.body[0].name).toBe("The Lord of the Rings")
    })

    it("gets a single movie by id", async () => {
        const res = await supertest(server).get("/movies/2")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.id).toBe(2)
        expect(res.body.name).toBe("The Hobbit")
    })

    it("returns an error for movie not found", async () => {
        const res = await supertest(server).get("/movies/50")
        expect(res.statusCode).toBe(404)
    })

    it("creates a movie", async () => {
        const res = await supertest(server)
            .post("/movies")
            .send({ name: "The Two Towers" })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.id).toBeDefined()
        expect(res.body.name).toBe("The Two Towers")
    })
})

