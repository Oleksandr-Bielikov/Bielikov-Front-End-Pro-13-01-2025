import React from 'react';
import TodoItem from './todoItem';

class TodoList extends React.Component {
    
    render() {
        return (
            <div>
                <h2>Todo list</h2>
                <form onSubmit={this.props.addTodo}>
                    <input type='text' value={this.props.task} onChange={(e) => this.props.onChangeTask(e.target.value)}/>
                    <button>Add todo</button>
                </form>
                <hr />
                <h3>Active todos</h3>
                <ul>
                    {this.props.taskList.map((item) => (
                    <TodoItem key={item.id} {...item} deleteTodo={this.props.deleteTodo} />                
                ))}
                </ul>
                <button onClick={this.props.logout}>LogOut</button>
            </div>
        );
    }
}

export default TodoList;