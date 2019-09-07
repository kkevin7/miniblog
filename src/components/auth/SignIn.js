import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Sign, signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';


export class SignIn extends Component {
    state = {
        email: '',
        password: '', 
    }

    handleChange = (e) =>{
        // console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handeSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signIn(this.state)
    }

    render() {
        const {authError, auth} = this.props;
        if (auth.uid) return <Redirect to='/' /> ;
        return (
            <div className="container">
            <div className="card z-depth-3">
                <form onSubmit={this.handeSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Iniciar Sesión</h5>
                    <div className="input-field">
                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <button className="btn pink lighten-1 z-depth-0">Inisiar Sesión</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
