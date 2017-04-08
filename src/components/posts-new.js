import React, { Component } from "react";
import { reduxForm } from "redux-form";


class PostsNew extends Component {
  render() {

    // the title, categories, content are configuration objects
    const { fields: { title, categories, content }, handleSubmit } = this.props;  // given to us by redux-form

    console.log(title);

    return (
      <form onSubmit={handleSubmit}>
        <h3>Create a new Post</h3>
        <div className="form-group">
          <label>Title</label>
          {
            // the {...title} is destructing of object, so that: for each property, do something like onChange={title.onChange}
          }
          <input type="text" className="form-control" {...title} />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

// note reduxForm is like connect(), which connects / wire up things to the Component
export default reduxForm({
  form: "PostsNewForm", // in state, it will be form.PostsNewForm and see the line below
  fields: ["title", "categories", "content"]  // in state, it will be form.PostsNewForm.title, etc
})(PostsNew);
