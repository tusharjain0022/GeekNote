import "./BlogEditor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import { Form, TextArea } from "semantic-ui-react";
import BlogFooter from "../Blog/BlogFooter/BlogFooter";

class BlogEditor extends React.Component {
  state = { title: "", brief_para: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  addBlog = async () => {
    await axios
      .post("http://localhost:5000/api/v1/blogs", {
        createdAt: Date.now(),
        title: this.state.title,
        author: "Tester",
        posting_date: Date.now(),
        brief_info: this.state.brief_para,
      })
      .then((res) => {
        if (res.status === 201) alert("Successful Post");
        else alert(res.statusText);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="blog-editor">
          <div className="heading">
            <h1>Express yourself ✍📝</h1>
          </div>
          <div className="form-area">
            <Form onSubmit={this.onFormSubmit} role="form">
              <br styles="clear:both" />
              <div className="writingArea">
                <TextArea
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  rows="2"
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="writingArea">
                <TextArea
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  maxLength="2000"
                  rows="19"
                  onChange={(e) =>
                    this.setState({ brief_para: e.target.value })
                  }
                />
              </div>
              <div className="submitbutton">
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  className="btn btn-primary pull-right"
                  onClick={this.addBlog}
                >
                  Add Post
                </button>
              </div>
            </Form>
          </div>
        </div>
        <BlogFooter />
      </div>
    );
  }
}

export default BlogEditor;
