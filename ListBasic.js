//firs things we know, we dont need to import useState as we are
//not relying on any input from user

function myList () {
    // Declare a list of users
    const users = [
        { id: 1, name: "Alice", status: "Active" },
        { id: 2, name: "Bob", status: "Inactive" },
        { id: 3, name: "Charlie", status: "Pending" },
        { id: 4, name: "Diana", status: "Active" },
    ];

    //now we will use return here
    //html elems: label: going to label all the cities
    //ul for unorder list, and li for list item
    //and need map
    //wrap in div

    return(
        <div>
            <h3>User Information</h3>
                <ul>
                   {users.map((user) => (
                    <li key={user.id}>
                        <strong>Name:</strong> {user.name}, <strong>Status:</strong> {user.status}
                        </li>
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

