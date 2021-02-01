import React, { Component } from "react";

class FormInput extends Component {
  render() {
    return (
      <>
        <div className="from-group">
          <input
            type="text"
            id={this.props.id}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.changeHandler}
            className={
              this.props.error && this.props.error.title
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder={this.props.placeholder}
          />
        </div>
      </>
    );
  }
}

export default FormInput;
