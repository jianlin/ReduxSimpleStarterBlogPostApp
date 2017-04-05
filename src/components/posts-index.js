
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";

class PostsIndex extends Component {

  componentWillMount() {
    console.log("PostsIndex mounting");
    this.props.fetchPosts()
  }

  allPosts() {
    return this.props.all.map((post) => {
      return (
        <li key={post.id}>{post.title} {post.categories} {post.id}</li>
      )
    })
  }

  render() {
    console.log("now rendering", this.props.all)

    if (!this.props.all) {
      return <div></div>;
    }

    return (
      <div>all the posts here
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
