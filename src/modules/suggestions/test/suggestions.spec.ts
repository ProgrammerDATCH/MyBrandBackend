import app from "../../../index";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

describe("Suggestions Test Cases", () => {

    let createdSuggestionId = "";

    it("Should be able to add new suggestion", (done) => {
      router()
        .post("/api/suggestion/add")
        .send({
          name: "TestingSuggestion",
          email: "testuser@gmail.com",
          subject: "TestingSuggestionSubject",
          message: "This is actual message of the suggestion",
        })
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", true);
          expect(response.body).to.have.property("message");
          createdSuggestionId = response.body.id;
          done(error);
        });
    });

    it("Should be able to get all suggestions", (done) => {
      router()
        .get("/api/suggestion/suggestions")
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", true);
          expect(response.body).to.have.property("message");
          expect(response.body.message).to.be.an("array");
          done(error);
        });
    });
    
    it("Should be able to delete created suggestion", (done) => {
        router()
          .delete("/api/suggestion/delete")
          .send({
           id: createdSuggestionId
          })
          .end((error, response) => {
            expect(response.body).to.be.a("object");
            expect(response.body).to.have.property("status", true);
            expect(response.body).to.have.property("message");
            done(error);
          });
      });

    
  });