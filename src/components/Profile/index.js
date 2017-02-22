/**
 * Created by ggoma on 2017. 2. 17..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactList from 'react-list';
import {loadProjects} from '../../actions/user_actions';
import FontAwesome from 'react-fontawesome';
import { bindActionCreators } from 'redux';

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
        this.setState({projects: user.projects});
    }

    componentDidMount() {
        this.setState({loading: true});
        this.props.loadProjects(48, 0, 10)
            .then(response => {
                console.log(response)
                this.setState({loading: false});
            });
    }

    renderProjects() {
        const {user} = this.props;
        return user.projects.map((project, i) => {
            return (
                <div key={i}>
                    <h1>{project.my_sc_name}</h1>
                </div>

            )
        })

    }

    renderBody() {
        const {user} = this.props;
        return (
            <header>
                <div className="container" style={{height: 1000}}>
                    <h1>Welcome {user.info.user_id}</h1>
                    <h1>herro</h1>
                    {this.renderProjects()}
                </div>
            </header>
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
