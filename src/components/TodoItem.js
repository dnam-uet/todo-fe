import React from 'react'

export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { completed, id, title } = this.props.todo
        return(
            <li className="todo-item" key={id}>
                <input type="checkbox" checked={completed} onChange={() => this.props.handleChange(id)}></input>    
                <span className={completed ? "completed" : null}>
                    {title}
                </span>
                <button className="btn-style" onClick={() => this.props.deleteItem(id)}> X </button>
            </li>
        )
    }
}