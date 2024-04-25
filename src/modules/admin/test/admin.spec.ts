import app from "../../../index";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

describe("Admin Test Cases", () => {

    let token="";

    it("Should be able to login an admin", (done) => {
      router()
        .post("/api/admin/login")
        .send({
          email: "dev@gmail.com",
          password: "password",
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

   
    it("User should not be able to login with invalid credentials", (done) => {
      router()
        .post("/api/admin/login")
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
        .post("/api/admin/check")
        .set("Authorization", `Bearer faketoken`)
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", false);
          expect(response.body).to.have.property("message", "You are not logged in as Admin. Invalid Token.");
          done(error);
        });
    });
  
  });