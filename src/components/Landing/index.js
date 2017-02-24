/**
 * Created by ggoma on 2017. 2. 8..
 */
import React, {Component} from 'react';
import NavBar from '../nav-bar';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Landing extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;

        console.log(scrollTop);

    }

    render() {
        return (
            <div>
                <NavBar/>
                {this.renderBody()}
                {this.renderDownload()}
                {this.renderFeatures()}
                {this.renderBuild()}
                {this.renderContacts()}
                {this.renderFooter()}
            </div>
        )
    }

    renderBody() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="header-content">
                                <div className="header-content-inner">
                                    <h1>
                                        <img src="/src/public/img/sketchware_bi_text.png" className="img-responsive" alt=""/>
                                        <br/>
                                        Create Android Apps
                                        <br/>
                                        On Your Smartphone.
                                    </h1>
                                    <a href="#download" className="btn btn-outline btn-xl page-scroll">Start Now for Free!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="device-container">
                                <div className="device-mockup galaxy_s5 portrait white">
                                    <div className="device">
                                        <div className="screen">
                                            <img src="/src/public/img/demo.mp4.gif" className="img-responsive" alt=""/>
                                        </div>
                                        <div className="button">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    renderDownload() {
        return (
            <ScrollableAnchor id={'download'}>
                <section className="download bg-primary text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <h2 className="section-heading">It's completely FREE!</h2>
                                <p>Our app is available on Google Play Store! Download now to get started!</p>
                                <div className="badges">
                                    <a target="_blank" className="badge-link" href="https://goo.gl/brjAO1"><img src="/src/public/img/google-play-badge.svg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }

    renderFeatures() {
        return (
            <ScrollableAnchor id={'features'}>
                <section className="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-heading">
                                    <h2>Imagine & Create</h2>
                                    <p className="text-muted">Make your imaginations come to Life</p>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="device-container">
                                    <div className="device-mockup galaxy_s5 portrait white">
                                        <div className="device">
                                            <div className="screen">
                                                <img src="/src/public/img/merged1.5x.gif" className="img-responsive" alt=""/> </div>
                                            <div className="button">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="feature-item">
                                                <i className="icon-screen-smartphone text-primary"></i>
                                                <h3>Develop on-the-go</h3>
                                                <p className="text-muted">
                                                    Program, compile, and run straight on your device.
                                                    There is no complicated setup needed. Simply install Sketchware!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-item">
                                                <i className="icon-puzzle text-primary"/>
                                                <h3>Block Language</h3>
                                                <p className="text-muted">
                                                    You don't need any prior programming experience.
                                                    Simply connect lego-like blocks to create logics for your application!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="feature-item">
                                                <i className="icon-loop text-primary"/>
                                                <h3>Source Code Translation</h3>
                                                <p className="text-muted">
                                                    Finished projects are automatically translated into Java and XML.
                                                    Your project is fully compatible with Android Studio!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-item">
                                                <i className="icon-share text-primary"/>
                                                <h3>Sharing</h3>
                                                <p className="text-muted">
                                                    You can share your finished projects.
                                                    Like and comment on your favorite projects. See what others are thinking and creating!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }

    renderCode() {
        return (
            <section className="cta">
                <div className="cta-content">
                    <div className="container">
                        <h2>Stop waiting.<br/>Start building.</h2>
                        <a href="https://goo.gl/brjAO1" target="_blank" className="btn btn-outline btn-xl page-scroll">Let's Get Started!</a>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>
        )
    }

    renderBuild() {
        return (

            <section className="cta">
                <div className="cta-content">
                    <div className="container">
                        <h2>Stop waiting.<br/>Start building.</h2>
                        <a href="https://goo.gl/brjAO1" target="_blank" className="btn btn-outline btn-xl page-scroll">Let's Get Started!</a>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>
        )
    }

    renderContacts() {
        return (
            <ScrollableAnchor id={'contact'}>
                <section className="contact bg-primary">
                    <div className="container">
                        <h2>We <i className="fa fa-heart"/> new friends!</h2>
                        <ul className="list-inline list-social">
                            <li className="social-facebook">
                                <a target="_blank" href="https://fb.com/sketchware"><i className="fa fa-facebook"/></a>
                            </li>
                            <li className="social-medium">
                                <a target="_blank" href="https://medium.com/sketchware"><i className="fa fa-medium"/></a>
                            </li>
                            <li className="social-slack">
                                <a target="_blank" href="http://slack.sketchware.io"><i className="fa fa-slack"/></a>
                            </li>
                        </ul>
                        <div className="slack_container">
                            <iframe src="http://slack.sketchware.io/iframe" className="__slackin" />
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }

    renderFooter() {
        return (
            <footer>
                <div className="container">
                    <p>&copy; 2016 Sketchware. All Rights Reserved.</p>
                    <ul className="list-inline">
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Terms</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}


