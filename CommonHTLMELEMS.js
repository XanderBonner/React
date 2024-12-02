/*
1. <label>
Purpose: Provides a description for form elements (e.g., inputs, checkboxes).

Why Important:

Improves accessibility by associating a label with an input.
Clicking the label focuses the associated input.

usage:
<label htmlFor="username">Username:</label>
<input id="username" type="text" />
*/

/*
2. <input>
Purpose: Captures user input (text, numbers, passwords, checkboxes, etc.).

Types:

type="text": For plain text.
type="password": For masked input.
type="number": For numeric input.
type="checkbox" and type="radio": For toggles or options.
React Example:

jsx
Copy code
const [value, setValue] = useState("");

return (
  <input
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);
*/

/* 
3. <textarea>
Purpose: Multiline text input.
React Example:
jsx
Copy code
const [text, setText] = useState("");

return (
  <textarea
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
);
*/

/* 
4. <select> and <option>
Purpose: Dropdown menus for selecting options.
React Example:
jsx
Copy code
const [selected, setSelected] = useState("option1");

return (
  <select value={selected} onChange={(e) => setSelected(e.target.value)}>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
);
*/

/*
5. <button>
Purpose: Triggers an action (e.g., form submission, event handling).
React Example:
jsx
Copy code
<button onClick={() => alert("Button clicked!")}>Click Me</button>
*/


/*
6. <p>
Purpose: Displays paragraphs of text.
React Example:
jsx
Copy code
<p>This is a paragraph of text.</p>
*/


/*
7. <h1>, <h2>, <h3> (Headings)
Purpose: Represent different levels of headings, used for structuring content.
React Example:
jsx
Copy code
<h1>Main Heading</h1>
<h2>Subheading</h2>
*/


/*
8. <ul> and <ol>
Purpose: Create unordered (<ul>) or ordered (<ol>) lists.
React Example:
jsx
Copy code
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
*/

/*
9. <form>
Purpose: Groups form elements and handles submissions.
React Example:
jsx
Copy code
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload
  console.log("Form submitted");
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter something" />
    <button type="submit">Submit</button>
  </form>
);
*/


/*
10. <div> and <span>
Purpose:
<div>: Block-level container for grouping elements.
<span>: Inline container for styling or grouping text.
React Example:
jsx
Copy code
<div>
  <p>This is a block.</p>
  <span>This is inline.</span>
</div>
*/



/*
12. <a>
Purpose: Creates hyperlinks.
React Example:
jsx
Copy code
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Example
</a>
*/



/*
13. <fieldset> and <legend>
Purpose: Groups related form elements and labels the group.
React Example:
jsx
Copy code
<fieldset>
  <legend>Personal Information</legend>
  <label>Name: <input type="text" /></label>
</fieldset>
*/



/*
14. <table>
Purpose: Displays tabular data.
React Example:
jsx
Copy code
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
*/

