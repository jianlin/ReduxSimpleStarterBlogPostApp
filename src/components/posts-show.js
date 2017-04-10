import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/index";
import { Link } from "react-router";

class PostsShow extends Component {
  componentWillMount() {
    console.log("PostsShow mounting");
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    const { post } = this.props;

    console.log("POST IS", post)
    if (!post) return <div>Loading...</div>;
    else return (
      <div>
        <Link to="/" className="btn btn-primary">
          Back to Index
        </Link>
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


export default connect(mapStateToProps, { fetchPost })(PostsShow);
