import React, { Component } from "react";
import { reduxForm } from "redux-form";


class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Create a new Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "PostsNewForm", // in state, it will be form.PostsNewForm and see the line below
  fields: ["title", "categories", "content"]  // in state, it will be form.PostsNewForm.title, etc
})(PostsNew);
