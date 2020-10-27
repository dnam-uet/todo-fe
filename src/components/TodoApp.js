import React from 'react';
import { v4 as uuidv4 } from 'uuid';


import Header from './layout/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';

export default class TodoApp extends React.Component{
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environement",
                completed: true
            },
            {
                id: 2,
                title: "Setup development environement",
                completed: false
            },
            {
                id: 3,
                title: "Setup development environement",
                completed: false
            }
        ]
    }

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id)
                todo.completed = !todo.completed;
                return todo;
            })
        })
    }

    deleteItem = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => {return todo.id !== id})
        })
    }

    addItem = (title) => {
        const newItem = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newItem]
        })
    }
    
    render(){
        return(
            <div className="container">
                <Header></Header>
                <AddTodo addTodo={this.addItem}></AddTodo>
                <Todos todos={this.state.todos} handleChange={this.handleChange} deleteItem={this.deleteItem}></Todos>   
            </div>
        )
    }
}