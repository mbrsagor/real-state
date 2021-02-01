import React, { Component } from "react";

export class TextAreaInput extends Component {
  render() {
    return (
      <>
        <div className="from-group">
          <label htmlFor="content">Enter Description</label>
          <textarea
            name={this.props.name}
            id={this.props.id}
            className={
              this.props.error && this.props.error.content
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder={this.props.placeholder}
            cols="30"
            rows="5"
            value={this.props.value}
            onChange={this.props.changeHandler}
          ></textarea>
        </div>
      </>
    );
  }
}

export default TextAreaInput;
