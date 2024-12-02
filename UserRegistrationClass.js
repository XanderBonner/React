import React, { Component } from "react";

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      name: "",
      email: "",
      gender: "Male", // Default gender
    };
  }

  // Event handler for input changes
  handleChange = (event) => {
    const { name, value } = event.target;

    // Update state dynamically based on the input name
    this.setState({
      [name]: value,
    });
  };

  // Event handler for form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Display the form data
    alert(`Name: ${this.state.name}\nEmail: ${this.state.email}\nGender: ${this.state.gender}`);

    // Optionally reset the form
    this.setState({
      name: "",
      email: "",
      gender: "Male", // Reset to default
    });
  };

  render() {
    return (
      <div>
        <h2>User Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          {/* Name Input */}
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter your name"
            />
          </label>
          <br />

          {/* Email Input */}
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter your email"
            />
          </label>
          <br />

          {/* Gender Dropdown */}
          <label>
            Gender:
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />

          {/* Submit Button */}
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default UserRegistrationForm;


/*
HOW TO CHANGE APP.JS FILE TO DO THIS

import React from "react";
import UserRegistration from "./UserRegistration"; // Importing the class-based component

function App() {
  return (
    <div className="App">
      <h1>User Registration Form</h1>
      <UserRegistration />
    </div>
  );
}

export default App;

*/
