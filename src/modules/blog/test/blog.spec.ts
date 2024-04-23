import app from "../../../index";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

describe("Blog Test Cases", () => {

    let createdBlogId = "";

    it("Should be able to add new Blog", (done) => {
      router()
        .post("/api/blog/add")
        .send({
          title: "Blog Title",
          description: "Blog description",
          image: "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=",
        })
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", true);
          expect(response.body).to.have.property("message");
          createdBlogId = response.body.id;
          done(error);
        });
    });

    it("Should be able to get all blogs", (done) => {
      router()
        .get("/api/blog/blogs")
        .end((error, response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).to.have.property("status", true);
          expect(response.body).to.have.property("message");
          expect(response.body.message).to.be.an("array");
          done(error);
        });
    });
    
    it("Should be able to delete created blog", (done) => {
        router()
          .delete("/api/blog/delete")
          .send({
           id: createdBlogId
          })
          .end((error, response) => {
            expect(response.body).to.be.a("object");
            expect(response.body).to.have.property("status", true);
            expect(response.body).to.have.property("message");
            done(error);
          });
      });

    
  });