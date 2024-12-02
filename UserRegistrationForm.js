import { useState } from "react";

function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "Male",
  });

  const handleChange = (event) => {
    //name specifies which arribtute we are changing (name, email, gender) and value holds the change
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </label>
      <br />
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default UserRegistrationForm;


//NOTES
/* 
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
};
What it does:
Purpose: Updates the formData state with new values when the user interacts with the form fields (e.g., typing in an input or selecting a dropdown option).
Parameters:
event: The event object triggered by the user interacting with a form element.
event.target: Represents the DOM element (e.g., input, select) that triggered the event.
Step-by-step:
Extract name and value:

The name attribute of the input/select element specifies which field is being updated (e.g., name, email, or gender).
The value is the current value of that input/select field.
Example:

For <input name="email" value="test@example.com" />:
name is "email".
value is "test@example.com".
Update formData state:

setFormData((prevData) => ...) ensures that the state is updated safely by referencing the previous state (prevData).
{ ...prevData, [name]: value }:
Spreads the previous state object (...prevData) to keep existing fields unchanged.
Updates the specific field (e.g., name, email, or gender) using the [name] syntax, which dynamically updates the key specified by name with the value.
*/

/*
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Name: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}`);
};
2. handleSubmit Function
javascript
Copy code
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Name: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}`);
};
What it does:
Purpose: Handles the form submission process, prevents the default form behavior, and displays the form data.
Step-by-step:
Prevent default form behavior:

event.preventDefault() stops the browser from reloading the page or navigating to a new URL (default form submission behavior).
Display the form data:

Uses alert to show the formData state in a formatted string using template literals:
javascript
Copy code
`Name: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}`
Each field is dynamically accessed from formData.
Example in action:
If formData is:
javascript
Copy code
{ name: "Jane Smith", email: "jane.smith@example.com", gender: "Female" }
Clicking the submit button triggers the alert:
makefile
Copy code
Name: Jane Smith
Email: jane.smith@example.com
Gender: Female
Key Points:
handleChange ensures the form state is updated dynamically as the user interacts with it.
handleSubmit prevents unnecessary page reloads and displays the current form state.
*/
