import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { connect } from "react-redux";

const formConfig = {
  form: "createPostForm",
  fields: ["title", "content", "author"],
  validate: validate
};

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Veuillez remplir le titre";
  }
  if (!values.content) {
    errors.content = "Veuillez remplir la description";
  }
  if (!values.author) {
    errors.author = "Veuillez remplir l'auteur";
  }

  return errors;
}

class PostForm extends Component {
  createPost(post) {
    this.props.createPost(post);
    this.props.history.push("/");
  }

  render() {
    const { fields, handleSubmit, errors } = this.props;
    console.log(errors);
    return (
      <div>
        <h1>Nouveau poste</h1>
        <form onSubmit={handleSubmit(this.createPost.bind(this))}>
          <div
            className={`form-group ${
              fields.title.touched && fields.title.invalid ? "has-danger" : ""
            }`}
          >
            <label>Titre</label>
            <input className="form-control" type="text" {...fields.title} />
            <div>{fields.title.touched && errors.title}</div>
          </div>
          <div
            className={`form-group ${
              fields.content.touched && fields.content.invalid
                ? "has-danger"
                : ""
            }`}
          >
            <label>Description</label>
            <input
              className="form-control"
              type="textarea"
              {...fields.content}
            />
            <div>{fields.content.touched && errors.content}</div>
          </div>
          <div
            className={`form-group ${
              fields.author.touched && fields.author.invalid ? "has-danger" : ""
            }`}
          >
            <label>Auteur</label>
            <input className="form-control" type="text" {...fields.author} />
            <div>{fields.author.touched && errors.author}</div>
          </div>
          <Link to={"/"} className="button_space">
            <button className="btn btn-danger">Retour</button>
          </Link>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.props.invalid}
          >
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
