import app from "../../../index";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";
import { testImg } from "../../../constants";

chai.use(chaiHttp);
const router = () => chai.request(app);

function registerAndLoginUser(callback: Function) {
  router()
    .post("/api/users/register")
    .send({
      name: "Test User",
      email: "testuserforcomments@gmail.com",
      password: "PasswordForUser",
    })
    .end((error, response) => {
      if (error) {
        return callback(error);
      }

      router()
        .post("/api/users/login")
        .send({
          email: "testuserforcomments@gmail.com",
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

function addNewBlog(callback: Function, token: string) {
  router()
    .post("/api/blog/add")
    .set("Authorization", `Bearer ${token}`)
    .send({
      title: "Blog Title",
      description: "Blog description",
      image: testImg,
    })
    .end((error, response) => {
      if (error) {
        return callback(error);
      }
      const createdBlogId = response.body.id;
      callback(null, createdBlogId);
    });
}

describe("Comments Test Cases", () => {

  let createdBlogId = "";
  let createdCommentId = "";
  let token = "";
  const fakeId = "609d2071278a0914dca23b99";

  before(function (done) {
    registerAndLoginUser((error: any, retrievedToken: string) => {
      if (error) {
        return done(error);
      }
      token = retrievedToken;

      addNewBlog((error: any, newBlogId: string) => {
        if (error) {
          return done(error);
        }
        createdBlogId = newBlogId;
        done();
      }, token);
    });

  });

  after(function (done) {
    router()
      .delete("/api/users/delete")
      .set("Authorization", `Bearer ${token}`)
      .end((error, response) => {
        router()
          .delete("/api/blog/delete")
          .set("Authorization", `Bearer ${token}`)
          .send({
            id: createdBlogId
          })
          .end((error, response) => {
            done();
          });
      });

  });

  it("Should be able to add new Comment", (done) => {
    router()
      .post("/api/comment/add")
      .send({
        name: "User1",
        email: "commentinguser@gmail.com",
        comment: "This is a comment for testing purposes",
        blogId: createdBlogId
      })
      .end((error, response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("status", true);
        expect(response.body).to.have.property("message");
        createdCommentId = response.body.id;
        done(error);
      });
  });

  it("Should be able to get all comments of a blog", (done) => {
    router()
      .get(`/api/comment/comments/${createdBlogId}`)
      .end((error, response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("status", true);
        expect(response.body).to.have.property("message");
        expect(response.body.message).to.be.an("array");
        done(error);
      });
  });

  it("Should be able to delete created comment", (done) => {
    router()
      .delete("/api/comment/delete")
      .set("Authorization", `Bearer ${token}`)
      .send({
        id: createdCommentId
      })
      .end((error, response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("status", true);
        expect(response.body).to.have.property("message");
        done(error);
      });
  });


  it("Should be able to add another new Comment", (done) => {
    router()
      .post("/api/comment/add")
      .send({
        name: "User2",
        email: "commentinguser@gmail.com",
        comment: "This is a comment for testing purposes",
        blogId: createdBlogId
      })
      .end((error, response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("status", true);
        expect(response.body).to.have.property("message");
        createdCommentId = response.body.id;
        done(error);
      });
  });

  it("Should be able to delete all blog comments", (done) => {
    router()
      .delete("/api/comment/deleteBlogComments")
      .send({
        blogId: createdBlogId
      })
      .end((error, response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("status", true);
        done(error);
      });
  });


});