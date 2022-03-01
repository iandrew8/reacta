
const todos = [
    {
        id : 1,
        title : "Shopping",
        reminder: true
    },
    {
        id : 2,
        title : "Exercise",
        reminder: false
    },
    {
        id : 3,
        title : "Coding",
        reminder: true
    },
    {
        id : 4,
        title : "Meeting",
        reminder: true
    }
]



function Todos() {
  return (
    <>
        {todos.map((todo)=>(
            <ul>
<li key={todo.id}>{todo.title}</li>
</ul>
        ))}
    </>
  )
}

export default Todos