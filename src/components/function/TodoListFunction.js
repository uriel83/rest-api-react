import React, {useState, useEffect} from "react";
import  TodoItemFunction  from "./TodoItemFunction";

export default () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            (response) => {
                return response.json()
            }
        ).then((tasksRes) =>{
            setTasks(tasksRes)
        })
    }, [])

    return(
        <div>
                <h3>hello todo list function</h3>
                <ul>
                    {
                        tasks.map(function(task){
                            return <TodoItemFunction task = {task} key={task.id} />
                        })
                    }
                </ul>
           </div>
    )
}