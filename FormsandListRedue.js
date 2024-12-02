/*
5. Forms and Lists Combined: Adding Items to a List
Problem:
Write a React component where the user can add a new task to a task list by typing the task name into an input field and clicking "Add Task."

Requirements:

Use useState to manage the task list and input value.
Render the updated task list below the input field.
Clear the input field after adding a task.
*/

//notes for me, one we know we will have a form, thus state is needed for this and handler, wrap in div, form, label, input
//next we will have a list, but its editable so it will have state, but we do need a map. will be wraped in div (with form), ul, li

import { useState } from "react";

function FormsandListCombo () {
    //lets build out list
    const[userList, setUserList] = useState([
        {id: 1, task: "Pick Up Kids", status: "Pending"},
        {id: 2, task: "Go To Store", status: "Completed"},
    ]);

    //declare state for task, and status
    const [userTask, setUserTask] = useState(""); //set to empty
    const [userStatus, setUserStatus] = useState("Pending"); //init to Pending

    //need event handler for userTask
    const handleUserTask = (event) => {
        setUserTask(event.target.value);
    }

    //event handler for userStatus
    const handleUserStatus = (event) => {
        setUserStatus(event.target.value);
    }

    //need event handler for form, in the form is where they will submit a new task
    const handleSubmit = (event) =>{
        //prevent page refresh
        event.preventDefault();

        //handle list submit, trim removes leading and trailing whitespace, thus if string enter has chars than if is true, continue, else it trims nothing and produces an empty string
        if(userTask.trim()){
            //Add the new task to the list with the selected status, ...userList takes all elem of the curr list array and copies them to a new array with our new input as well
            setUserList([
                //grab old list to copy with new item
                ...userList,
                //get the info from task, our use of the class
                { id: `task${userList.length + 1}`, task: userTask, status: userStatus},
            ]);
        }

        //clear input fields
        setUserTask = ("");
        setUserStatus = ("Pending");

    }

    //need event handler to change the list id that are already populated, when the taskId matches the given taskId we operate
    //prevList is current state of the list, pass in taskId we wish to change
    const toggleStatus = (taskId) => {
        //update the userList, need to pass in prevList to mutate it
        setUserList((prevList) => 
            //create a new array in which we can iterate over
            prevList.map((task) =>
                //check if task.id matches, if so check if it needs to be changed
                task.id === taskId
                    ?{...task, status: task.status === "Pending" ? "Done" : "Pending"}
                    : task //(if task.id does not match task than don't change anything)
                )
            );
    }

    //return function will go here, notes
    //wrap in div
    //first thing will be displaying the map
    return (
        <div>
            <label>
                Here Are Your Task's for the Day:
                <ul>
                    {userList.map((toDo) => (
                        <li key={toDo.id}>
                            Task: {toDo.task}, Status: {toDo.status}{""}
                            <button onClick={() => toggleStatus(toDo.id)}>Toggle Status</button>
                        </li>
                    ))}
                </ul>
            </label>

            <form onSubmit={handleSubmit}>
                <label>
                    Enter Your New Task:
                    <input 
                    type="text"
                    placeholder="Enter Your Next Task Here"
                    value={userTask}
                    onChange={handleUserTask}
                    />
                </label>

                <br />
                <label>
                    Select Status:
                    <select value={userStatus} onChange={handleUserStatus}>
                        <option value="Pending">Pending</option>
                        <option value="Done">Done</option>
                    </select>
                </label>
                <br/>
                <button type="submit">Add Task</button>
            </form>

        </div>

    )
    


    


}

//need to export
export default FormsandListCombo;

//

/* 
<button onClick={() => toggleStatus(toDo.id)}>Toggle Status</button>
creates a button in your React component. When the button is clicked, it calls the toggleStatus function with 
a specific task's id as its argument. Let’s break it down step by step.
onClick is a React event handler, in this case it calls toggleStatus once hit

Arrow Function: () => toggleStatus(toDo.id) ensures that the toggle status function
is not executed immediatley but only when the button is clicked. If we didn't have arrow the button would click immeditaley (ie page wouldn't wait)

toDo.id value is passed to the toggleStatus function so it knows which task's tatus to change
*/
