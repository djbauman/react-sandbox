import React from 'react';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            isLoading: true
        }
    }

    storeData() {
        const params = {
            name: this.state.name,
            username: this.state.username
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { params })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    fetchData() {
        const result = axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.setState({
                    name: res.data[0].name,
                    username: res.data[0].username,
                });
            })
        return result;
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    async componentDidMount() {
        await this.fetchData();
        this.setState({isLoading: false})
    }

    render() {
        let component = <CircularProgress />
        if (!this.state.isLoading) {
            component = <form className="Form" onSubmit={this.storeData.bind(this)}>
                <TextField name="name" label="Name" style={{ display: 'flex', }} value={this.state.name} onChange={this.handleChange.bind(this)} />
                <TextField name="username" label="Username" style={{ display: 'flex', }} value={this.state.username} onChange={this.handleChange.bind(this)} />
                < Button variant="contained" type="submit" > Create</Button >
            </form>
        }
        return (
            <div>
                <Container>
                    {component}
                </Container>
            </div>
        )
    }
}

export default (Form);
