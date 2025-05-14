import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <li className='todo-item'>
                {this.props.text}
                <button onClick={() => this.props.deleteTodo(this.props.id)}>Delete todo</button>
            </li>
        );
    }
}

export default TodoItem;