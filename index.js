function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'Outwork',
        isCompleted: false,
      },
      {
        text: 'Out-Improve',
        isCompleted: false,
      },
      {
        text: 'Out-Strategize',
        isCompleted: false,
      },
      {
        text: 'Outlast',
        isCompleted: false,
      }        
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, {text, isCompleted:false}];
      setTodos(newTodos);
    }
    const removeTodo = index => {
      var index = Number(index);
      let temp = [...todos];    
      temp.splice(index, 1);
      setTodos(temp);
    }
  
    return(
      <div className="app">
          <div className="container-fluid">
        <div className="list-group">
        {todos.map((todo, i) => (
          
       <Todo index={i} key={i} todo={todo} remove={removeTodo}/>))}
        <TodoForm addTodo={addTodo} />
        </div>
        </div>
        </div>
    );
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
  