import React, { Component } from "react";
import { connect } from "react-redux";
import { readAllPost, deletePost } from "../actions/index";
import PostListItem from "../components/post-list-item";

class PostList extends Component {
  UNSAFE_componentWillMount() {
    this.props.readAllPost();
  }

  renderPosts() {
    const { posts } = this.props;
    console.log(posts);
    if (posts.length !== 0) {
      console.log(posts);
      return posts.map(post => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            deletePostCallBack={() => this.deletePostCallBack(post)}
          />
        );
      });
    }
  }

  deletePostCallBack(post) {
    console.log(post);
    this.props.deletePost(post.id);
  }

  render() {
    return (
      <div>
        <h1>Liste de postes</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderPosts()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    posts: store.posts
  };
};

const mapDispatchToProps = { readAllPost, deletePost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
