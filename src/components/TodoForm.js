import React, { Component } from 'react';
import shortid from 'short-id';

class TodoForm extends Component {

    state = {
        text: '',
    }

    handleChangeInput = (event) =>{
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        
        this.props.onSubmit({
            id: shortid.generate(),
            text:this.state.text,
            complete:false,
        })

        this.setState({
            text:'',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="text"
                    placeholder="todo..." 
                    value={this.state.text} 
                    onChange={this.handleChangeInput} 
                />
                <button onClick={this.handleSubmit}>
                    add todo
                </button>
            </form>
        )
    }
}

export default TodoForm;