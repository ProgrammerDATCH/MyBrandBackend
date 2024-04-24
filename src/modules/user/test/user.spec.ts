import app from "../../../index";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

describe("User Test Cases", () => {

    let token="";

    it("Should be able register new user", (done) => {
      router()
        .post("/api/users/register")
        .send({
          name: "TestingUser",
          email: "testuser@gmail.com",
          password: "PasswordForUser",
        })
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", true);
          done(error);
        });
    });
  
    it("Should not add same user twice", (done) => {
      router()
        .post("/api/users/register")
        .send({
          name: "TestingUser",
          email: "testuser@gmail.com",
          password: "PasswordForUser",
        })
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status");
          expect(response.body).to.have.property("message");
          expect(response.body.status).to.equal(false);
          expect(response.body.message).to.equal("User already exist.");
          done(error);
        });
    });

    it("Should be able to login registered user", (done) => {
      router()
        .post("/api/users/login")
        .send({
          email: "testuser@gmail.com",
          password: "PasswordForUser",
        })
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status");
          expect(response.body).to.have.property("message");
          expect(response.body.message).to.be.a("object");
          expect(response.body.message).to.have.property("token");
          expect(response.body.status).to.equal(true);
          token=response.body.message.token;
          done(error);
        });
    });

    it("Should be able to update registered user", (done) => {
      router()
        .patch("/api/users/update")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "TestingUser-Updated",
          email: "testuser@gmail.com",
        })
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", true);
          expect(response.body).to.have.property("message");
          done(error);
        });
    });

    it("Should be able to delete registered user", (done) => {
      router()
        .delete("/api/users/delete")
        .set("Authorization", `Bearer ${token}`)
        .send({
          email: "testuser@gmail.com",
        })
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", true);
          expect(response.body).to.have.property("message", "Deleted.");
          done(error);
        });
    });
  
    it("User should not be able to login with invalid credentials", (done) => {
      router()
        .post("/api/users/login")
        .send({
          email: "fake@gmail.com",
          password: "fakePassword"
        })
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", false);
          done(error);
        });
    });

    
    it("Should be able to detect invalid Token", (done) => {
      router()
        .post("/api/users/check")
        .set("Authorization", `Bearer faketoken`)
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", false);
          expect(response.body).to.have.property("message", "You are not logged in. Invalid Token.");
          done(error);
        });
    });
  
  });