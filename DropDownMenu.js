//A couple of things, we know we will need a state since people
//will need to swtich between clicked and not clicked ya know
//so we need useState as a hook. React Hook allows us to add state to a functional component

import { useState } from "react";

//Now we will need a function, better than class

function DropDownMenu() {
  //declare the state const here, two options(selectedOption, set), set init to option1
  const [selectedOption, setSelectedOption] = useState("option1");

  //we know we will need a handle function in React to handle changes
  //in a user interface element, such as a dropdown menu
  //this function triggers once a user interacts with the elem
  //event = event object that is auto passed to the function when the event occurs, contains info
  //event.target = refers to the DOM elem that triggered the event, like a button
  //event.target.value = retrieves the curr value of the elem that trigger the event, for dropdrown it will hold the value selected
  //finally we set the selectedoption to the chosen value
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //now we need to return so we can render the fucntin to the screen, return also defines the components output
  return (
    //need to wrap the entire UI in div so we can have multiple things
    <div>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 4</option>
        </select>
      </label>
      <p>You selected: {selectedOption}</p>
    </div>
  );
}

//last thing we know we need us export

export default DropDownMenu;

/*
 * notes for the return
<div> we need to wrap the entire UI section
We do this becuause we can only return a single root element 
if we have multiple elements, you need to wrap them in a parent container to satisfy this requirement
/////////////////////////////////////////////////////

<label>
associates a label with the dropdwon menu, improving accessibility. The text "Select an option" is displayed as a prompt to the user
//////////////////////////////////////////////////////

<select>
Now this represents a dropdown menu where the user can choose from multple options.
value={selectedOption}: binds the dropdown menu's current value to the selectedOption state(to start curr is option1)
This makes the <select> element controlled, ensuring React manages its value

onChange={handleOptionChange}: specifies the event handler (handleOptionChange) to call whenever
the user selects a different option. This updates the selcetedOption state to match the user's
selection


///////////////////////////////////////////////////////////////
<option>:

Defines the selectable options within the dropdown menu.
Each <option> has:
A value attribute representing the actual data for the option.
A display text (e.g., "Option 1").


//////////////////////////////////////////////////////////////////
<p>You selected: {selectedOption}</p>:

Dynamically displays the current value of selectedOption. When the user 
selects a new option, this paragraph updates automatically.


What is a Controlled Component?
A controlled component in React is a form element (like <input>, <textarea>, or <select>) whose value is controlled by React state.

In a controlled component:

The value of the element is set by a React state variable.
Changes to the element are handled by an onChange event, which updates the state.
This means React is the single source of truth for the form element's value. 
The component doesn't maintain its own internal state; instead, 
it depends entirely on React for its value and behavior.
The value and onChange are props (short for properties) that you pass to the <select> element.
 */
