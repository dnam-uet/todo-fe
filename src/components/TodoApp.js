import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


import Header from './layout/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';

export default class TodoApp extends React.Component{
    state = {
        todos: [
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

    deleteTodo = id => {
        const _id = id;
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== _id;
                })
            ]
        })
        axios.delete(`http://localhost:3001/removetask/${id}`)
            .then(
                res => console.log(res.data)
            )
            .catch(
                err => console.log(err)
            )
    };
        

    addItem = (title) => {
        const todo = {
            newTask: title
        }
        axios.post("http://localhost:3001/addtask",todo)
            .then(
                res => {
                    this.setState({
                        todos: [res.data, ...this.state.todos]
                    })
                }
            )
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount(){
        const config = {
            params: {
                _limit: 10
            }
        }
        axios.get("http://localhost:3001/", config)
            .then( respone => {
                const newTodos = respone.data.map(data => {

                    return {
                        id: data.id,
                        title: data.task,
                        completed: data.status === "done" ? true : false
                    }
                })
                this.setState({
                    todos: newTodos
                })
            })
    }
    
    render(){
        return(
            <div className="container">
                <Header></Header>
                <AddTodo addTodo={this.addItem}></AddTodo>
                <Todos todos={this.state.todos} handleChange={this.handleChange} deleteItem={this.deleteTodo}></Todos>   
            </div>
        )
    }
}