import app from "../../../index";
import { testImg } from "../../../constants";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);
function registerAndLoginUser(callback: Function) {
  router()
    .post("/api/users/register")
    .send({
      name: "Test User",
      email: "testuserforblog@gmail.com",
      password: "PasswordForUser",
    })
    .end((error, response) => {
      if (error) {
        return callback(error);
      }

      router()
        .post("/api/users/login")
        .send({
          email: "testuserforblog@gmail.com",
          password: "PasswordForUser",
        })
        .end((error, response) => {
          if (error) {
            return callback(error);
          }

          const token = response.body.message.token;
          callback(null, token);
        });
    });
}

describe("Blog Test Cases", () => {

    let createdBlogId = "";

    let token="";
    let createdTodo = {};
    const fakeId = "609d2071278a0914dca23b99";

  before(function (done) {
    registerAndLoginUser((error: any, retrievedToken: string) => {
      if (error) {
        return done(error);
      }
      token = retrievedToken;
      done();
    });
  });

  after(function (done) {
    router()
      .delete("/api/users/delete")
      .set("Authorization", `Bearer ${token}`)
      .end((error, response) => {
        done();
      });
  });

    it("Should not be able to add blog without login token", (done) => {
      router()
        .post("/api/blog/add")
        .send({
          title: "Blog Title",
          description: "Blog description",
          image: "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=",
        })
        .end((error, response) => {
          expect(response.body).to.be.an("object").that.has.property("status", false);
          done(error);
        });
    });

    it("Should be able to add new Blog", (done) => {
      router()
        .post("/api/blog/add")
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "Blog Title",
          description: "Blog description",
          image: testImg,
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
          .set("Authorization", `Bearer ${token}`)
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