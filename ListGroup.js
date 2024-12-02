import { useState } from "react";


function ListGroup() {
  //notes from what ul/li mean
  //In React, <li> is the same as in HTML: it represents a list item within an unordered list (<ul>)
  //or an ordered list (<ol>).

  //what if we want to render a list of items dynamically?
  //const items = ["New York", "San Francisco", "Toyko", "London", "Paris"];

  //say we want to use a list thats dynamic
  let items = ["New York", "San Francisco", "Toyko", "London", "Paris"];
 
  //Hook, a function that allows us to tap into built in features of React
  //State hook, we can tell react that it can data or state that will change overtime.
  const [selectedIndex, setSelectedIndex] = useState(-1);


  //test if we want to check if items is empty
  //items = [];

  //take each item and convert it to an item of a different type (in our case "li"), this is basically a for loop
  //items.map(item => <li>{item}</li>)

  //we cant put the expression stright up in the code because only html elements or other react component are allowed
  //so to fix this we just put it in {} which makes sense because {} this denotes that we have an expression thats returning something

  //when using map, we need to provide a key for each unique item. in our case we have just our list. But say it was an api call
  //we would need to us item.id (most things have an unique id)

  //if we want to move the expression out of the jsx markup we can stroe in a const
  //turnary, if we equal 0 than first option (no item found) else we do null
  //items.length === 0 ? <p>No item found</p> : null
  //const varible named getMessage,
  //= () => { ... } is broken down to (): This is where you define the
  // same as def getMessage(num1, num2):

  // const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  // }

  //this equal the same thing. second just says if length = 0 then we do <p> No Item Found
  // { items.length === 0 ? <p>No item found</p> : null }
  // { items.length === 0 && <p>No item Found</p> }

  //onClick, write an arrow function with no paramters and set the body to print out console print.

//event handler
  const handleClick = (event) => console.log(event)

  return (
    <div>
      <h1>List</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
          key={item} 
          onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
