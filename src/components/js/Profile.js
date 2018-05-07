import React, { Component } from 'react';

import '../css/Profile.css';

class Profile extends Component {
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            })
        } else {
            this.setState({ profile: userProfile });
        }
    }

    render() {
        const { profile } = this.state;
        return (
            <div className='container'>
                <div className="profileArea">
                    <img src={profile.picture} alt={profile.name} />
                    <h1>{profile.nickname}</h1>
                    <h2>{profile.name}</h2>
                </div>
            </div>
        )
    }
}

export default Profile;