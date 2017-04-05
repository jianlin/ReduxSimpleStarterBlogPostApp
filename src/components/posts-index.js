
import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router";

class PostsIndex extends Component {

  componentWillMount() {
    console.log("PostsIndex mounting");
    this.props.fetchPosts()
  }

  allPosts() {
    return this.props.all.map((post) => {
      return (
        <li key={post.id}>Title: {post.title} Categories: {post.categories} ID: {post.id}</li>
      )
    })
  }

  render() {
    console.log("now rendering", this.props.all)

    if (!this.props.all) {
      return <div></div>;
    }

    return (
      <div>
        <h2>all the posts here</h2>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            New posts
          </Link>
        </div>
        <ul>
        {this.allPosts()}
        </ul>
      </div>
    );
  }

}


function mapStateToProps(state) {    // HOW TO CONNECT APP STATE TO CONTAINER: map the app level state to props
  return {
    all: state.posts.all
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
