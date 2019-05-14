import React, { Component } from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends Component{

    state = {
        todos:[],
        todoToShow : "all",
        toggleAllComplete:true,
    }

    addTodo = (todo) =>{
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleCompleted = (id)=>{
        this.setState({
            todos: this.state.todos.map(todo=>{
                if(todo.id ===id){
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }else{
                    return todo;
                }
            })
        })
    }

    handleDeleteTodo = id =>{
        this.setState({
            todos: this.state.todos.filter(todo=>{
                return todo.id !== id
            })
        })
    }

    filterTodoToShow = str =>{
        this.setState({
            todoToShow: str
        })
    }

    removeAllTodosThatAreComplete = () =>{
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }

    render(){
        let todos = [];

        if(this.state.todoToShow === "all"){
            todos = this.state.todos;
        }else if (this.state.todoToShow === "active"){
            todos = this.state.todos.filter(todo=>!todo.complete)
        }else if (this.state.todoToShow === "complete"){
            todos = this.state.todos.filter(todo=>todo.complete)
        }

        return(
            <>
                <TodoForm onSubmit={this.addTodo}/>
                {todos.map(todo=>(
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        toggleCompleted={()=>this.toggleCompleted(todo.id)}
                        onDeleteTodo = {()=>{
                            this.handleDeleteTodo(todo.id)
                        }}
                    />
                ))}

                <div>todos left : {this.state.todos.filter(todo=>!todo.complete).length}</div>

                <div>
                    <button onClick={()=>this.filterTodoToShow("all")}>all</button>
                    <button onClick={()=>this.filterTodoToShow("active")}>active</button>
                    <button onClick={()=>this.filterTodoToShow("complete")}>complete</button>
                </div>

                {this.state.todos.filter(todo=>todo.complete).length ? (
                    <button 
                        onClick={this.removeAllTodosThatAreComplete}
                    >
                        remove all complete todo
                    </button>
                ) : null}
                
                <div>
                    <button 
                        onClick={()=>{
                            this.setState({
                                todos:this.state.todos.map(todo=>({
                                    ...todo,
                                    complete:this.state.toggleAllComplete
                                })),
                                toggleAllComplete: !this.state.toggleAllComplete
                            })
                        }}
        
                    >
                        toggle all complete
                    </button>
                </div>
            </>
        )
    }
}

export default TodoList;