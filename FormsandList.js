/*
5. Forms and Lists Combined: Adding Items to a List
Problem:
Write a React component where the user can add a new task to a task list by typing the task name into an input field and clicking "Add Task."

Requirements:

Use useState to manage the task list and input value.
Render the updated task list below the input field.
Clear the input field after adding a task.
*/

//so we know that we will have user input so we need to have useState
import { useState } from "react";

//function call for the list
function MyList (){
    //need a honey-to-do-list for the user
    const [toDoList, setToDoList] = useState([
        {id: "task1", task: "Clean House", status: "Pending"},
        {id: "task2", task: "Pick Up Kids", status: "Done"},
    ]);
    
    //declare state for the userInput
    const [userInput, setUserInput] = useState(""); //set to an empty string to start

    //event handler to update userInput as the user types
    const handleUserInput = (event) => {
        setUserInput(event.target.value); //update the input state with whats types
    }

    //need event handler for form submit
    const handleSubmit = (event) => {
        //prevent page refresh
        event.preventDefault();

        //add the new task to the list
        if(userInput.trim()){
            setToDoList([
                ...toDoList,
                {id: `task${toDoList.length + 1}`, task: userInput, status:"Pending"},
            ]);
        }
        //clear the input field after adding the task
        setUserInput("");
    };

    //return call here
    //html: div (to wrap), form for doc, input for user, textarea for the, placeholder
    //first we will list the list, then below we will have a form to enter more
    return (
        <div>
                <label>
                    Here's Your To-Do List:
                    <ul>
                        {toDoList.map((toDo) => (
                            <li key={toDo.id}>
                                Task: {toDo.task}, Status: {toDo.status}
                            </li>
                        ))}
                    </ul>
                </label>

                <form onSubmit={handleSubmit}>
                        <label>
                            Enter Your Next Task:
                            <input
                            type="text"
                            placeholder="Enter Your Next Task Here"
                            value={userInput}
                            onChange={handleUserInput}
                            />
                        </label>
                        <br/>
                        <button type="submit">Add Task</button>
                </form>
        </div>
    )
}

export default MyList;