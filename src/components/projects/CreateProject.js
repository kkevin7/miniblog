import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';

export class CreateProject extends Component {
    state = {
        title: '',
        content: '', 
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
        this.props.createProject(this.state);
        this.props.history.push('/');
    }

    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin' /> ;
        return (
            <div className="container">
            <div className="card z-depth-3">
                <form onSubmit={this.handeSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Nueva Publicación</h5>
                    <div className="input-field">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input">
                        <button className="btn pink lighten-1 z-depth-0">Publish</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateProject)
