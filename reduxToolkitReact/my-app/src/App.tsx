
import { useState } from 'react'
import './App.css'


interface ITodo{
  id: string,
  text: string,
  completed: boolean, 
}
function App() {
 
  const [todos,setTodos] = useState<Array<ITodo>>([])
  const [text,setText] = useState("")
  const addTodo = ()=>{
    if (text.trim().length){
      setTodos([ ...todos, 
       {
        id: new Date().toISOString(),
        text: text,
        completed: false,
      }])
      setText("")
    }
  }
  const removeTodo = (todoId: any) => { setTodos(todos.filter(todo => todo.id !== todoId)); }
  todos.map(todo => {})
  const toggleTodoComplete = (todoId: any, text:string) => {
      setTodos(todos.map(todo => {
        if (todoId !== todo.id) return todo as any;
        return {
          
          ...todos,id:todoId,text:text, completed: !todo.completed,
        }
      }))
  }
  return (
      <div className="App">
        <h1>MY TODOS</h1>
        <label className="todoLabel">
   
          <input className="textInput" value={text} onChange = {(e)=>{setText(e.target.value)}} />
          <button onClick={addTodo}>Add</button>
        </label>
        <ul>
          {
            todos.map(todo=><li key={todo.id}>
              <input className='todoCheck' type="checkbox" checked={todo.completed} onClick={()=>{toggleTodoComplete(todo.id,todo.text)}} />
              <span>{todo.text}</span>
              <span className='xButton' onClick = {()=>{removeTodo(todo.id)}}>&times;</span>
              </li>)
          }
        </ul>
      </div>
  )
}

export default App
