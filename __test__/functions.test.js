const supertest = require("supertest");
const app = require("../index");

describe("/", () => {
    describe("get / route", () => {
        it("should return 200", async () => {
            await supertest(app).get("/").expect(200);
        });
    });

    describe("post / route", () => {
        it("should return 200", async () => {
            await supertest(app)
                .post("/")
                .send("message=Testing with supertest")
                .expect(200);
        });

        it("should return 400", async () => {
            await supertest(app).post("/").send("nomessage=").expect(400);
        });
    });
});

describe("/1", () => {
    describe("get /1 route", () => {
        it("should return 200", async () => {
            await supertest(app).get("/1").expect(200);
        });
    });

    describe("post /1 route", () => {
        it("should return 200", async () => {
            await supertest(app)
                .post("/1")
                .send("message=Testing with supertest")
                .expect(200);
        });

        it("should return 400", async () => {
            await supertest(app).post("/1").send("nomessage=").expect(400);
        });
    });
});
