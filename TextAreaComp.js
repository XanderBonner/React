//create a react component with a textarea that lets the user enter text.
//Display the number of characters and words in the text
//as the user types

//requirements: use onChange to track user input, calc chars/words dynmically

import { useState } from "react";

function UserEnter () {

    //going to need const state for the user input
    const [userInfo, setUserInfo] = useState("") //empty string to start

    //going to need an event handler for the input
    const handleUserInput = (event) => {
        setUserInfo(event.target.value);
    }

    //function to count the words
    const countWords = (text) => {
        // Trim spaces and split by one or more spaces using a regular expression
        return text.trim().split(/\s+/).filter(Boolean).length;
    }

    //Calc characs and words dynamically
    const charCount = userInfo.length; //Total num of chars
    const wordCount = countWords(userInfo); //Total num of words

    //now for the function call
    //HTML elems: div (to wrap), textarea
    return (
        <div>
            <label>
                Enter The Word Of Your Chosing
                <textarea
                value={userInfo}
                onChange={handleUserInput}
                />
            </label>
            <p>You've Entered: {charCount} characters and {wordCount} words.</p>
        </div>
    )
}

export default UserEnter;




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
Explanation:
State for Text: userInfo is used to store the value entered by the user.
handleUserInput Function: This updates the state with the user's input every time they type.
Character Count: charCount is simply the length of the string in userInfo.
Word Count: countWords function:
text.trim().split(/\s+/): This splits the string by spaces, handling cases where there are multiple spaces.
.filter(Boolean): Filters out any empty strings caused by extra spaces.
Key React Concepts:
onChange: Used to update state with the user’s input dynamically.
Dynamically Calculating Words and Characters: React will re-render the component every time the user types, so the word and character counts will update in real-time.
*/

/* 
In JavaScript, there are several ways to trim whitespace and split strings based on different criteria. Here are some other methods to accomplish similar tasks:

1. Using String.prototype.trim()
The trim() method removes whitespace from both ends of a string but does not affect any whitespace within the string. It’s useful for cleaning up user input or text data before processing.

Example:
javascript
Copy code
let str = "   Hello World   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // "Hello World"
2. Using String.prototype.split()
The split() method divides a string into an array of substrings based on a specified delimiter. You can split by spaces, commas, line breaks, etc.

Basic Split by Single Space:
javascript
Copy code
let str = "Hello World";
let words = str.split(" ");
console.log(words); // ["Hello", "World"]
Split by Multiple Spaces (Using Regular Expressions):
javascript
Copy code
let str = "Hello   World    How Are You";
let words = str.split(/\s+/); // \s+ matches one or more spaces
console.log(words); // ["Hello", "World", "How", "Are", "You"]
Split by Comma or Space:
javascript
Copy code
let str = "apple,banana,orange";
let fruits = str.split(/,|\s+/); // Split by comma or space
console.log(fruits); // ["apple", "banana", "orange"]
3. Using String.prototype.replace()
The replace() method allows you to replace specific characters or substrings within a string. You can use it in combination with a regular expression to remove extra spaces or trim the string.

Remove Extra Spaces Between Words:
javascript
Copy code
let str = "Hello    World   How    Are  You";
let noExtraSpaces = str.replace(/\s+/g, ' ').trim();
console.log(noExtraSpaces); // "Hello World How Are You"
Remove Leading and Trailing Spaces:
javascript
Copy code
let str = "   Hello World   ";
let cleanStr = str.replace(/^\s+|\s+$/g, "");
console.log(cleanStr); // "Hello World"
4. Using String.prototype.match()
The match() method allows you to extract portions of the string based on a regular expression. It can be useful if you want to split a string based on custom patterns and also handle trimming.

Match Words:
javascript
Copy code
let str = "Hello   World 123   ";
let words = str.match(/\w+/g); // \w+ matches one or more word characters (letters, digits, underscores)
console.log(words); // ["Hello", "World", "123"]
Match Non-Whitespace (i.e., Trim and Split):
javascript
Copy code
let str = "   Hello   World   ";
let words = str.match(/\S+/g); // \S matches any non-whitespace character
console.log(words); // ["Hello", "World"]
5. Using String.prototype.split() with filter()
Sometimes after using split(), you might have empty strings in the array due to extra spaces or delimiters. You can use filter() to remove them.

Example:
javascript
Copy code
let str = "Hello   World   How  Are You  ";
let words = str.split(" ").filter(Boolean); // filter(Boolean) removes empty strings
console.log(words); // ["Hello", "World", "How", "Are", "You"]
6. Using Array.prototype.join() (for joining after split)
Sometimes, after splitting a string into an array, you may want to join it back together with a single space or another delimiter.

Example:
javascript
Copy code
let str = "Hello    World  How  Are    You";
let cleanStr = str.split(/\s+/).join(" "); // join array elements with single space
console.log(cleanStr); // "Hello World How Are You"
7. Using Regular Expressions Directly
You can also use regular expressions to handle both trimming and splitting in one step. Regular expressions can be very powerful for complex string manipulations.

Trim and Split by Custom Pattern (e.g., Non-Alphanumeric Characters):
javascript
Copy code
let str = "   Hello, World!   How 123  Are?   ";
let words = str.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
console.log(words); // ["Hello", "World", "How", "123", "Are"]
Conclusion:
trim() is useful for removing leading and trailing whitespace.
split() can divide a string into an array based on a delimiter (like space, comma, etc.).
Regular expressions (/\s+/, /^\s+|\s+$/, etc.) provide flexible and powerful ways to handle trimming, splitting, and pattern matching.
Combining split(), filter(), replace(), and match() can allow you to efficiently handle text manipulation in React or JavaScript in general.
If you have specific use cases, feel free to ask for more tailored examples!
*/

/* 
To split a string using multiple delimiters like tabs, hyphens, spaces, commas, etc., you can use regular expressions in JavaScript with split(). The regular expression allows you to match different delimiters in a single call.

Here's how you can split a string using various delimiters such as tabs (\t), hyphens (-), spaces (\s), or commas:

Example: Split by Tabs, Hyphens, and Other Delimiters
Regular Expression Approach:
You can use the split() method with a regular expression that matches any of the delimiters you want to use.

Code Example:
javascript
Copy code
let str = "Hello\tWorld-How are you, today?";

// Split by tab (\t), hyphen (-), or comma (,), and handle any number of spaces
let result = str.split(/[\t-,\s-]+/); // The regular expression handles tabs, hyphens, spaces, and commas
console.log(result); // ["Hello", "World", "How", "are", "you", "today?"]
Explanation:
\t: Represents the tab character.
,: Matches a comma.
\s: Matches any whitespace character (spaces, tabs, line breaks).
+: Means "one or more" of the preceding characters, so it handles multiple consecutive delimiters.
[\t-,\s-]: The square brackets indicate that any character in the group (\t, -, ,, or whitespace) can act as a delimiter.
*/