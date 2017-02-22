/**
 * Created by ggoma on 2017. 2. 8..
 */
import React, {Component} from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {login} from '../actions/user_actions';
import FontAwesome from 'react-fontawesome';
import { bindActionCreators } from 'redux';

class NavBar extends Component {
    state = {
        showModal: false,
        loading: false,
        errorMessage: '',
        username: '',
        password: ''
    };

    componentDidMount() {
        // console.log(this.props);
        // console.log(this.context.location.pathname)
    }

    componentWillReceiveProps(prop) {
        console.log('received props:', prop);

    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    renderModal() {
        const {loading, errorMessage} = this.state;
        return (
            <Modal
                show={this.state.showModal}
                onHide={this.close.bind(this)}
                container={this}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>Username or e-mail</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}
                        />
                        <br/>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}
                        />
                    </FormGroup>
                    <p style={{fontSize: 10, color: 'red', textAlign: 'right'}}>{errorMessage}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close.bind(this)}>Cancel</Button>
                    {loading
                        ? <Button bsStyle="primary" disabled>
                            <FontAwesome name='spinner' color='white' spin/>
                          </Button>
                        : <Button bsStyle="primary" onClick={this.tryLogin.bind(this)}>Login</Button>
                    }

                </Modal.Footer>
            </Modal>
        )
    }

    tryLogin() {
        const {username, password} = this.state;
        this.setState({loading: true});
        this.props.login(username, password, "N")
            .then((response) => {this
                this.setState({loading: false});
                console.log("response:", response);
                if(!response.payload.data.login_id) {
                    this.setState({errorMessage: 'Wrong login information. Try again.'});
                } else {
                    this.setState({errorMessage: '', showModal: false});
                }
            });
    }

    render() {

        const {user} = this.props;

        return (
            <div>
                <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span><i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand page-scroll" href="/">Sketchware</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a className="page-scroll" href="#download">Download</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#features">Features</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#contact">Contact</a>
                                </li>
                                <li>
                                    {
                                        user.info.login_id
                                            ?
                                            <Link to={`profile`} className="pull-right">{user.info.login_id}</Link>
                                            :
                                            <a href="#" onClick={this.open.bind(this)} className="page-scroll">Login</a>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div style={{position: 'absolute'}}>
                    {this.renderModal()}
                </div>
            </div>
        )
    }
}

NavBar.contextTypes = {
    router: React.PropTypes.object,
    location: React.PropTypes.object
};

function mapStateToProps(state) {
    return { user: state.user }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({login}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
