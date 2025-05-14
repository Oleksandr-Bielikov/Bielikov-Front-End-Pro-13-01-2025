import React from 'react';
import './App.css'
import Login from './components/login';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      task: '',
      taskList: [],
      user: '',
      password: '',
      logged: false,
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  };

  login(e) {
    e.preventDefault()
    if (this.state.user.trim() === '' || this.state.password.trim() === '') {
      alert('Please, enter correct datas');
    } else {
      this.setState({ user: '', password: '', logged: true });
    }
  };

  logout() {
    let conf = confirm('Do you really want to leave the page?');
    if (conf) {
      this.setState({ logged: false });
    }
  };

  addTodo(e) {
    e.preventDefault()
    if (this.state.task.trim() === '') {
      alert('Please, enter correct task');
    } else {
      this.setState({
        taskList: [...this.state.taskList, { id: Date.now(), text: this.state.task }],
        task: ''
      }, () => localStorage.setItem('todos', JSON.stringify(this.state.taskList)))
    }
  };

  deleteTodo(id) {
    let updateTaskList = this.state.taskList.filter((task) => task.id !== id)
    this.setState({
      taskList: updateTaskList
    }, (localStorage.setItem('todos', JSON.stringify(updateTaskList))));
  };

  componentDidMount() {
    let storage = localStorage.getItem('todos');
    if (storage) {
      this.setState({taskList: JSON.parse(storage)})
    } else {
      this.setState({taskList: []})
    }
  };

  render() {
    if (this.state.logged === false) {
      return (
        <div className='container'>
      <Login
        user={this.state.user}
        password={this.state.password}
        login={this.login}
        onChangeUser={(value) => this.setState({ user: value })}
        onChangePassword={(value) => this.setState({password: value})}
          />
          </div>
    )
    } else {
      return (
        <div className='container'>
        <TodoList
          task={this.state.task}
          taskList={this.state.taskList}
          onChangeTask={(value) => this.setState({ task: value })}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          logout={this.logout}
          />
          </div>
      )
    }
  }
}

export default App;