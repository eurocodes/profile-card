import React from 'react';
import axios from 'axios';

class Form extends React.Component{
    state = {username: ""}
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.username}`)
        this.props.onSubmit(resp.data);
        this.setState({username: ""})
    }
    handleInputChange = (event) => {
        this.setState({username: event.target.value})
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input type="text"
            placeholder="GitHub Username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
            />
            <button>Add Card</button>
        </form>
        )
    }
}

export default Form;