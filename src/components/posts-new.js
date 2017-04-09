import React, { Component, PropTypes } from "react";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { Link } from "react-router";


class PostsNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleUserSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // the post has been created successfully
        // now route back to index
        this.context.router.push("/");
      });
  }

  render() {

    // the title, categories, content are configuration objects
    const { fields: { title, categories, content }, handleSubmit } = this.props;  // given to us by redux-form

    console.log(title);

    return (
      <form onSubmit={handleSubmit(this.handleUserSubmit.bind(this))} className="new-post-form">
        <h3>Create a new Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? "has-danger" : ""}`}>
          <label>Title</label>
          {
            // the {...title} is destructing of object, so that: for each property, do something like onChange={title.onChange}
          }
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched && title.error}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ""}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched && categories.error}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? "has-danger" : ""}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched && content.error}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-warning cancel-button">
          Cancel
        </Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || !values.title.trim()) {
    errors.title = "Enter a title for the blog";
  }
  if (!values.categories || !values.categories.trim()) {
    errors.categories = "Enter one or more categories";
  }
  if (!values.content || !values.content.trim()) {
    errors.content = "Enter some content for the blog";
  }

  return errors;
}

// note reduxForm is like connect(), which connects / wire up things to the Component
export default reduxForm({
  form: "PostsNewForm", // in state, it will be form.PostsNewForm and see the line below
  fields: ["title", "categories", "content"],  // in state, it will be form.PostsNewForm.title, etc
  validate
}, null, { createPost })(PostsNew);
