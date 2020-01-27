const assert = require("assert");
const bookControllerFactory = require("../../src/bookController");

describe("Book controller", function() {
    it("create or update happy path", async function() {
        // given
        const req = {
            body: {
                isbn: "ISBN"
            }
        };
        const res = {
            redirect(path) {
                res.redirect.invokedWith = path;
            }
        };
        const bookService = {
            async createOrUpdate() {

            }
        };
        const bookController = bookControllerFactory({bookService});

        // when
        await bookController.createOrUpdate(req, res);

        // then
        assert.deepStrictEqual(res.redirect.invokedWith, "/book/ISBN");
    });

    it("create or update unhappy path", async function() {
        // given
        const req = {body: {}};
        const res = {};
        function next(e) {
            next.invokedWith = e;
        }
        const bookService = {
            async createOrUpdate() {
                throw "sth bad happened";
            }
        };
        const bookController = bookControllerFactory({bookService});

        // when
        await bookController.createOrUpdate(req, res, next);

        // then
        assert.deepStrictEqual(next.invokedWith, "sth bad happened");
    });
});