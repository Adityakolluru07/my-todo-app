import React, {useState} from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat bf","take shower","wass"]);
    const [newTask, setNewTask] = useState(""); 

    function handleInputChange(event) {
        setNewTask(event.target.value)

    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskup(index) {

    }

    function moveTaskDown(index) {

    }

    return (
        <div className='to-do-list'>

            <h1>To-Do-List</h1>
            <div>
                <input  type = "text"
                        placeholder='Enter a task...'
                        value={newTask}
                        onChange = {handleInputChange}>
                </input>
                <button className='add-button'
                        onClick={addTask}>
                        Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key = {index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button'
                                onClick={() => deleteTask(index)}>
                                Delete
                        </button>
                        <button className='move-button'
                                onClick={() => moveTaskup(index)}>
                                Up ☝🏻
                        </button>
                        <button className='move-button'
                                onClick={() => moveTaskDown(index)}>
                                Down 👇🏻
                        </button>
                    </li>    
                )}
            </ol>

        </div>
    );
}

export default ToDoList