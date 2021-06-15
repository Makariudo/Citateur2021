const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");
require('dotenv').config();

beforeEach((done) => {
  mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

//drop database's changes after each test
afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  });
});

test('get /api/citations', async () => {
  const res = await supertest(app).get("/api/citations");
  console.log("res", res)
})