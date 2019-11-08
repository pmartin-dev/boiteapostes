import React, { Component } from "react";
import PostContent from "../components/post-content";

class Post extends Component {
  render() {
    return (
      <div>
        <p>Post n°{this.props.match.params.id}</p>
        <PostContent />
      </div>
    );
  }
}

export default Post;
