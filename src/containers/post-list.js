import React, { Component } from "react";
import { connect } from "react-redux";
import { readAllPost, deletePost } from "../actions/index";
import PostListItem from "../components/post-list-item";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from "react-router-dom";

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
        <div className="button_add">
          <Link to={"create-post"}>
            <button className="btn btn-primary btn-circle btn-lg">
              Ajouter un poste
            </button>
          </Link>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>
          <ReactCSSTransitionGroup
            component="tbody"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionName="fade"
          >
            {this.renderPosts()}
          </ReactCSSTransitionGroup>
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
