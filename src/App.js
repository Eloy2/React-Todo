import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./components/Todo.css";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { todoList: todoList };
  }

  toggleItem = itemId => {
    console.log("Got it", itemId);
    this.setState({ todoList: this.state.todoList.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })})
    console.log(this.state.todoList);
  };

  addItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    });
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
