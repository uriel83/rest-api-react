import './App.css';
import  TodoListClass  from "./components/class/TodoListClass";
import  TodoListFunction  from "./components/function/TodoListFunction";


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>{Date.now()}</h2>
      <div style={{float: 'left', marginLeft: 20, color:'red',width: 600}}> 
        <TodoListClass/>
      </div>
      <div style={{float: 'right', marginRight: 20, color:'blue',width: 600}}> 
        <TodoListFunction/>
      </div>
     
    </div>
  );
}

export default App;
// https://jsonplaceholder.typicode.com/posts