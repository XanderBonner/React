//a couple of things we know we will need for a form
//one we need to import useState since the form will be dependent on user input

import { useState } from "react";

//now we will set up the function call here
function UserForm () {
    //the userform requires we set up a username, password. these are seperate
    //so we will need to have two diff stae const variables
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("") //best as empty strings
    
    //we will need an event handler for user input on both username and password
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    
    //and a event handler for form submission (ie button)
    const handleSubmit = (event) => {
        //need to prevent page refresh so we can handle the submission
        event.preventDefault();
        alert(`Username: ${userName}, Password: ${password}`)
    }

    //now for the return call, need to wrap the whole thing in div since we'll have multiple elems
    //HTML elements I'll need, div, label (to label each box), form, input
    //form will need props that are onchange, will be set to handleSubmit
    //input will need value set to what it is current, type set to string, onChange to call event handler and placeholder
    //button needs type
    return (
        <div>
            <form onChange={handleSubmit}>
                <label>
                    Username:
                    <input 
                        type="string"
                        onChange={handleUserNameChange}
                        value={userName}
                        placeholder="Enter Username"
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input 
                        type="string"
                        onChange={handlePasswordChange}
                        value={password}
                        placeholder="Enter Password"
                    />
                </label>
            </form>
            <br/>
            <button type="submit">Submit</button>
        </div>
    );
}



//need to export the function
export default UserForm;
