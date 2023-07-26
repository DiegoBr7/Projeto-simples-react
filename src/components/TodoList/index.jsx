import { useState } from "react"
import Task from "../Task"
import './style.css'


function TodoList (){

    const [text , setText]  = useState('')
    const [tasks , setTask ] = useState([])

    const emptyTask =  <span className="EmptyTask" >nenhuma task foi criada , adicione uma!</span>

    const addTodo = (text) =>{
   
      setTask([...tasks , text]);
    }

    const removeTodo = (ref) => {
     setTask(tasks.filter((task , index ) => index !== ref ))
    }

    return(
        <section className="todo-list" >
          <header>
          <input type="text" value={text} onChange={(e) => setText(e.target.value) }  />
            <button className="sucess"  onClick={()=> addTodo(text)} >Add</button>
          </header>
        
          {tasks.map((text,index)=>(
          <Task 
          key={index}
          taskId={index}
          description={text}
          removeCallback = {removeTodo}
          />
          ))}
          {!tasks.length &&  emptyTask }
 
        </section>
    )   
}

export default TodoList