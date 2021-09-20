import React,{useState} from 'react'
import TodoApp from './TodoApp'



 const Todolist = () => {
   const [todos,setTodos] = useState([])
   const[name, setName] = useState('')

   const handleSubmit = (e) => {
    e.preventDefault();
      const todo = {id: Math.floor(Math.random() *100), name: name}
    console.log(todo)
}
const handleChange = (e) => {
    setName(e.target.value)
}
    const handleAdd = (e) => {
        
        const todo = {id: Math.floor(Math.random() *100), name}
        setTodos(()=> {
            return [...todos,todo]
      })

    }
    const deleteTodo = (id) => {
  
  const newtodos =todos.filter(todo=>todo.id !==id)
  setTodos(newtodos)   
}

   
    return (
        <>
         <form className ='todo-form' onChange ={handleChange}
        onSubmit = {handleSubmit} value={name} >
       
            <label htmlFor = 'todo' />
            <input id = 'todo'type="text"  placeholder= 'enter a new todo'/>
            
        </form>
           
    
       
       
       <section> 
           <button className="btn btn" onClick={handleAdd}>Add a todo</button>
           
         </section>
     
       {todos.map((todo) => {
      const{id, name} =todo
       return (
         <div className= 'item' key={id} >
            
             <h4>{name}</h4>
             <p>{id}</p>
             
        
         
         <button onClick={() =>deleteTodo(id)}>Delete</button>
         </div>
         )})}
         

        </>
    )

         }

export default Todolist