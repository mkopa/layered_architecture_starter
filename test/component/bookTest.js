const assert = require("assert");
const request = require("supertest");
const app = require("../../src/app");

describe("Book catalog", function() {
    it("should support CRUD lifecycle", async function() {
        const db = await require("../../src/connection");
        const client = request(app(db));


        const createResult = await client
            .post('/book')
            .send({
                title: "JavaScript in Action",
                authors: ["James Smith", "Kate Donovan"],
                isbn: "0123456789",
                description: "The ultimate JS book!"
            })
            .set('Content-Type', 'application/json')
            .expect(302);

        await client
            .get(createResult.header.location)
            .set('Accept', 'application/json')
            .expect(200, {
            title: "JavaScript in Action",
            slug: "javascript-in-action",
            authors: ["James Smith", "Kate Donovan"],
            isbn: "0123456789",
            description: "The ultimate JS book!"
        });
    });
});