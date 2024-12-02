//So off the dome

//going to need import useState, since forms rely on user input
import { useState } from "react";

//functio call here
function UserForm() {
  //going to need a state const for the username and password
  const [userName, setUserName] = useState(""); //set to empty string
  const [password, setPassword] = useState("");

  //now we need an event handler for userName
  const handleUserNameChange = (event) => {
    //just need to change setUserInfo to what was inputted
    setUserName(event.target.value);
  };

  //need event hanlder for password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //need form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents default form submission
    //use alert to give immediate feeback on the forms data when submitted
    alert(`UserName: ${userName}, Password: ${password}`);
  };

  //now we have our return function
  return (
    //need to wrap in a div since lets have multiple entries
    <div>
      <form onChange={handleSubmit}>
        <label>
          UserName:
          <input
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={handleUserNameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

//need to export
export default UserForm;

//html elements i know i need,
//div, form, input
