/**
 * Created by Tania on 14/10/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfileById } from '../actions/profile';
import { DEFAULT_USERPIC_URL } from '../config';
import Loader from './utils/loader';

class Profile extends Component {
    componentWillMount() {
        this.props.fetchProfileById(this.props.params.id);
    }

    render() {
        if(!this.props.profile) {
            return (<div><Loader/></div>);
        } else {
            const image = this.props.profile.imageUrl || DEFAULT_USERPIC_URL;
            return (
                <div>
                    <img src={image}/>
                    <div>Profile of {this.props.profile.username}</div>
                    <div>{this.renderName()}</div>
                    <div>{this.renderBio()}</div>
                    <div>{this.renderAuthorSection()}</div>
                </div>
            );
        }
    }
    renderName() {
        if(!this.props.profile.name) {
            return (<div>No name supplied</div>);
        } else {
            return (<div>{this.props.profile.name}</div>);
        }
    }

    renderBio() {
        if(!this.props.profile.bio) {
            return (<div>No bio supplied</div>);
        } else {
            return (<div>{this.props.profile.bio}</div>);
        }
    }

    renderAuthorSection() {
        if(this.props.profile.isAuthor) {
            return (<div>
                <button>Add book!</button>
            </div>);
        } else {
            return (<div>
                <button>Become author!</button>
            </div>);
        }
    }
}



function mapStateToProps(state) {
    console.log(state);
    return {
        user: state.auth.user,
        profile: state.profile.profile
    };
}

export default connect(mapStateToProps, {fetchProfileById})(Profile);
