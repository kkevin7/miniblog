import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export class SignUp extends Component {
    state = {
        email: '',
        password: '', 
        firstName: '',
        lastName: ''
    }

    handleChange = (e) =>{
        // console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handeSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { auth} = this.props;
        if (auth.uid) return <Redirect to='/' /> ;

        return (
            <div className="container">
                <form onSubmit={this.handeSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Apellido</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps) (SignUp)
