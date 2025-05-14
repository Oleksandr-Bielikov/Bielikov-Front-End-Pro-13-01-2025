import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <>
                <h2>Welcome to Todo-App</h2>
                <form onSubmit={this.props.login}>
                <label htmlFor='login'>Login</label>
                <input type='text' name='login' value={this.props.user} onChange={(e) => this.props.onChangeUser(e.target.value) } />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={this.props.password} onChange={(e) => this.props.onChangePassword(e.target.value)}/>
                <br />
                <button>LogIn</button>
                </form>
            </>
        );
    }
}

export default Login;