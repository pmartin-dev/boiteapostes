import React, { Component } from "react";
import { connect } from "react-redux";
import { readAllPost, deletePost } from "../actions/index";
import PostListItem from "../components/post-list-item";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from "react-router-dom";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { displayOnlyMines: false };
  }

  UNSAFE_componentWillMount() {
    this.props.readAllPost();
  }

  renderPosts() {
    const { posts } = this.props;
    let arrayPosts;
    console.log(posts);
    if (posts.length !== 0) {
      if (this.state.displayOnlyMines) {
        arrayPosts = this.filterMyPosts(posts);
      } else {
        arrayPosts = posts;
      }

      return arrayPosts.map(post => {
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

  filterMyPosts(postList) {
    return postList.filter(post => {
      if (post.author === "Moi") {
        return true;
      } else {
        return false;
      }
    });
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
        <input
          type="checkbox"
          onChange={e => this.setState({ displayOnlyMines: e.target.checked })}
        />
        Afficher uniquement mes posts
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
