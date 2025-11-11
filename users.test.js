const request = require("supertest");
const app = require("../node_assigment/index");

describe("GET /users", () => {
  it("should return list of users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty("name");
  });
});
