import React, { Component } from "react";
import PostContent from "../components/post-content";
import { connect } from "react-redux";
import { readPost } from "../actions/index";

class Post extends Component {
  UNSAFE_componentWillMount() {
    this.props.readPost(this.props.match.params.id);
  }

  renderPostContent() {
    const { post } = this.props;
    if (post) {
      return <PostContent post={this.props.post} />;
    }
  }

  render() {
    return <div>{this.renderPostContent()}</div>;
  }
}

const mapStateToProps = store => {
  return {
    post: store.activePost
  };
};

const mapDispatchToProps = { readPost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
