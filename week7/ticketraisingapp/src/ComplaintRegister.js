import React, { Component } from "react";

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      complaint: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const refNumber = Math.floor(Math.random() * 100) + 1;
    alert(
      `Thanks ${this.state.name}\nYour Complaint was Submitted.\nTransaction ID is: ${refNumber}`
    );
    this.setState({
      name: "",
      complaint: ""
    });
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 style={{ color: "red" }}>
          Register your complaints here!!!
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Complaint:</label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
