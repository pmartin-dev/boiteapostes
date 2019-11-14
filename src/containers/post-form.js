import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { connect } from "react-redux";

const formConfig = {
  form: "createPostForm",
  fields: ["title", "content", "author"]
};

class PostForm extends Component {
  createPost(post) {
    this.props.createPost(post);
    this.props.history.push("/");
  }

  render() {
    const { fields, handleSubmit } = this.props;

    return (
      <div>
        <h1>Nouveau poste</h1>
        <form onSubmit={handleSubmit(this.createPost.bind(this))}>
          <div className="form-group">
            <label>Titre</label>
            <input className="form-control" type="text" {...fields.title} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="textarea"
              {...fields.content}
            />
          </div>
          <div className="form-group">
            <label>Auteur</label>
            <input className="form-control" type="text" {...fields.author} />
          </div>
          <Link to={"/"} className="button_space">
            <button className="btn btn-danger">Retour</button>
          </Link>
          <button type="submit" className="btn btn-primary">
            Valider
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { createPost };

export default connect(
  null,
  mapDispatchToProps
)(reduxForm(formConfig)(PostForm));
