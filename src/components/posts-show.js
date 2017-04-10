import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions/index";
import { Link } from "react-router";

class PostsShow extends Component {
  componentWillMount() {
    console.log("PostsShow mounting");
    this.props.fetchPost(this.props.params.id);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleUserDelete() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        // the post has been created successfully
        // now route back to index
        this.context.router.push("/");
      });
  }

  render() {
    const { post } = this.props;

    console.log("POST IS", post)
    if (!post) return <div>Loading...</div>;
    else return (
      <div>
        <Link to="/">
          Back to Index
        </Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.handleUserDelete.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>

      </div>
    );
  }

}



function mapStateToProps(state) {    // HOW TO CONNECT APP STATE TO CONTAINER: map the app level state to props
  return {
    post: state.post
  }
}


export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
