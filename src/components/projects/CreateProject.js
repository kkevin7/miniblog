import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
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
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handeSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps) (CreateProject)
