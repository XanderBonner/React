//firs things we know, we dont need to import useState as we are
//not relying on any input from user

function myList () {
    //declare the user list here
    const options = [
        {value: "city1", label: "New York"},
        {value: "city2", label: "LA"},
        {value: "city3", label: "Boston"},
        {value: "city4", label: "Atlanta"}
    ];

    //now we will use return here
    //html elems: label: going to label all the cities
    //ul for unorder list, and li for list item
    //and need map
    //wrap in div

    return(
        <div>
            <p>Here Are The Cities I've Visited:</p>
                <ul>
                   {options.map((city) => (
                    <li key={city.value}>{city.label}</li>
                   ))} 
                </ul>
        </div>
    )
}

//need to export
export default myList;

/* 
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
