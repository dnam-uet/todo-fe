import React from 'react';

import TodoItem from './TodoItem'

export default class Todos extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(
                        todo => <TodoItem todo={todo} handleChange={this.props.handleChange} deleteItem={this.props.deleteItem}></TodoItem>
                    )}
                </ul>
            </div>
        )
    }
}