const supertest = require("supertest");
const app = require("../index");

describe("/", () => {
    describe("get / route", () => {
        it("should return 200", async () => {
            await supertest(app).get("/").expect(200);
        });

        it("should return a body with a result", async () => {
            const { body } = await supertest(app).get("/");
            expect(body).toEqual({ "result": "get in /" });
        });
    });

    describe("post / route", () => {
        it("should return 200", async () => {
            await supertest(app)
                .post("/")
                .send("message=Testing with supertest")
                .expect(200);
        });

         it("should return a body with the message", async () => {
             const { body } = await supertest(app)
                 .post("/")
                 .send("message=Testing with supertest");
             expect(body).toEqual({
                 "This is your message": "Testing with supertest",
             });
         });

        it("should return 400", async () => {
            await supertest(app).post("/").send("nomessage=").expect(400);
        });

        it("should return a body with an error when it fails", async () => {
            const { body } = await supertest(app)
                .post("/")
                .send("nomessage=");
            expect(body).toEqual({
                "Error in /": "Insert key 'message' (your message)",
            });
        });
    });
});

describe("/1", () => {
    describe("get /1 route", () => {
        
        it("should return 200", async () => {
            await supertest(app).get("/1").expect(200);
        });

         it("should return a body with the result", async () => {
            const { body } = await supertest(app).get("/1");
            expect(body).toEqual({ "result": "get in /1" });
        });
    });

    describe("post /1 route", () => {
        it("should return 200", async () => {
            await supertest(app)
                .post("/1")
                .send("message=Testing with supertest")
                .expect(200);
        });

         it("should return a body with the message", async () => {
             const { body } = await supertest(app)
                 .post("/1")
                 .send("message=Testing with supertest");
             expect(body).toEqual({
                 "This is your message": "Testing with supertest",
             });
         });

        it("should return 400", async () => {
            await supertest(app).post("/1").send("nomessage=").expect(400);
        });

        it("should return a body with an error when it fails", async () => {
            const { body } = await supertest(app).post("/1").send("nomessage=");
            expect(body).toEqual({
                "Error in /1": "Insert key 'message' (your message)",
            });
        });
    });
});

describe("/*", () => {
    describe("get /any-other route", () => {
        it("should return 404", async () => {
            await supertest(app).get("/foo").expect(404);
        });

        it("should return a body with {response: 404 This URI doesn't exist} when it fails", async () => {
            const { body } = await supertest(app)
                .post("/any-other route")
                .send("nomessage=");
            expect(body).toEqual({
                response: "404 This URI doesn't exist",
            });
        });
    });

    
});
