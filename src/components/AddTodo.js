import React from 'react';

export default class AddTodo extends React.Component{
    state = {
        title: ""
    }
    changeAddField = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
        })
    };

    render(){
        return (
            <form className="form-container" onSubmit={this.addTodo}>
                <input type="text" placeholder="Add Todo..." className="input-text" name="newTask" onChange={this.changeAddField} value={this.state.title}></input>
                <input type="submit" value="Add" className="input-submit"></input>
            </form>
        )
    }
}