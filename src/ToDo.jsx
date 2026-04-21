    import {useState} from 'react';
    import { v4 as uuidv4 } from "uuid";
    import './ToDo.css';
    export default  function ToDo(){
    let [task,setTask]=useState([{ task: "Coding", id: uuidv4(), isdone: false },
  { task: "Exercise", id: uuidv4(), isdone: false },
  { task: "Read book", id: uuidv4(), isdone: false },
  { task: "Watch tutorial", id: uuidv4(), isdone: false },
  { task: "Practice DSA", id: uuidv4(), isdone: false },
  { task: "Go for walk", id: uuidv4(), isdone: false },
  { task: "Complete project", id: uuidv4(), isdone: false },
  { task: "Revise notes", id: uuidv4(), isdone: false }
]);

    let [newTodo,setNewTodo]=useState("");

    let  addNewTask=()=>{
        if(newTodo.trim()==="") return ;
        setTask((prev)=>{
        return [...prev,{task:newTodo,id:uuidv4(),isdone:false}];
    })
        setNewTodo("");
    }
    let updateTodovalue=(event)=>{
            setNewTodo(event.target.value);
    }
    let deleteTodo=(id)=>{
    setTask((prevTodo)=>prevTodo.filter((todo)=>todo.id!==id));
    }
    let markAllDone=()=>{
        setTask((prevtask)=>(prevtask.map((todo)=>{
            return {
                ...todo,
                isdone:true,
            }
        })))
    }
    let MarkAsDone=(id)=>{
        setTask((prevTask)=>(
            prevTask.map((todo)=>{
                if(todo.id===id){
                    return {
                        ...todo,
                        isdone:true,
                    }
                }
                else{
                    return todo;
                }
            })
        ))
    }
        return (
            <div className="todo-container">
              
                <input value={newTodo} onChange={updateTodovalue} placeholder="Add a task" >
                </input>
                <button onClick={addNewTask} >Add</button> 
                <ul className="task-list">
                    <h3>Task List</h3>
                {task.map((todo)=>
                    <li className="task-item" key={todo.id}><span style={{textDecorationLine:todo.isdone?"line-through":"none"}}>{todo.task}</span>
                   
                    <button onClick={()=>{
                        deleteTodo(todo.id)}}>delete</button>
                        <button onClick={()=>{MarkAsDone(todo.id)}} disabled={todo.isdone}>Mark As Done</button></li>)} 
                    </ul>
                   
                    <button className="all-btn" onClick={markAllDone}>MarkALLDone</button>
                
            </div>
        )
    }