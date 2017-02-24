/**
 * Created by ggoma on 2017. 2. 17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadProjects} from '../../actions/user_actions';
import FontAwesome from 'react-fontawesome';
import { bindActionCreators } from 'redux';
import {SERVER} from '../../actions/user_actions';



class Profile extends Component {
    state = {
        loading: false,
        projects: this.props.user.projects
    }

    render() {
        return (
            <div>
                {this.renderBody()}
            </div>
        )
    }

    componentWillReceiveProps(props) {
        const {user} = props;
        console.log('props received-', props);
        if(user.info.length == 0) {
            return this.props.history.push('/');
        }

        this.setState({projects: user.projects});
    }

    componentDidMount() {
        const {user} = this.props;
        if(user.info.login_id == null) {
            return this.props.history.push('/');
        }

        this.setState({loading: true});

        this.props.loadProjects(48, 0, 10)
            .then(response => {
                console.log(response)
                this.setState({loading: false});
            });
    }

    renderProjects() {
        const {loading, projects} = this.state;

        if(loading) {
            return <FontAwesome name='spinner' size={32} spin/>
        }


        if(projects.length == 0) {
            return <p>There are no projects to display.</p>
        }

        return (
            <ul className='list-group'>
                {
            projects.map((project, i) => {
                return (
                    <div key={i}
                       className="list-group-item list-group-item-action row">
                        <div className='col-xs-12 col-sm-6 col-md-8'>
                            <p>{project.my_sc_name}</p>
                            <small>{project.mysc_reg_dt}</small>
                        </div>
                        <div className='col-xs-6 col-md-4 text-right' >
                            <a target='_blank'
                               href={`${SERVER}/download.do?user_id=${project.user_id}&sc_id=${project.sc_id}`}>
                                <small>{project.zip_name}</small>
                                <img style={{width: 16, height: 16}} src="/src/public/img/download.png"/>
                            </a>
                        </div>

                    </div>
                )
            })
            }
            </ul>
        )
    }

    renderBody() {
        const {user} = this.props;
        return (
                <div className="container">
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-8'>
                            <h1>Welcome {user.info.login_id}!</h1>
                        </div>
                        <div className='col-xs-6 col-md-4 text-right'>
                            <p>Logout</p>
                        </div>
                    </div>

                    {this.renderProjects()}
                </div>
        )
    }
}

function mapStateToProps(state) {
    return { user: state.user }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({loadProjects}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
