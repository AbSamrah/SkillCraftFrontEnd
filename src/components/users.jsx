import React, { Component } from 'react';
import apiClient from '../helper/apiclient';
import { Link } from 'react-router-dom';

class Users extends Component {
    state = { 
        users: []
     } ;
    render() { 
        return (
        <div>
            <div className="d-flex justify-content-between align-items-center m-1">
                <h1 className="m-0">Users</h1>
                <Link to="/users/adduser" className="btn btn-primary">Add user</Link>
            </div>
            
            <div className="table-responsive small">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => 
                            <tr key={user.id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Link to="/user" className="btn btn-secondary">Edit</Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>);
    }

    async componentDidMount(){
        const {data: users} = await apiClient.get('/users');
        this.setState({users});
    }
}
 
export default Users;