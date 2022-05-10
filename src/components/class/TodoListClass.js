import React from "react";
import  TodoItemFunction  from "../function/TodoItemFunction";

export default class TodoListClass extends React.Component {
    state = {
        tasks: []
    }

    async componentDidMount(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const tasksRes = await response.json();
        this.setState({
            tasks:tasksRes
        })
    }
    render(){
        return(
            <div>
                <h3>hello todo list class</h3>
                <ul>
                    {
                        this.state.tasks.map(function(task){
                            return <TodoItemFunction task = {task} key={task.id} />
                        })
                    }
                </ul>
           </div>
        );
    }
}