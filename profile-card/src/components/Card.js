import React from 'react';
class Card extends React.Component{
    render() {
        const profile = this.props;
        return(
        <div className="github-profile">
            <img src={profile.avatar_url} alt="profile avatar" />
            <div className="info">
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company?? "Google"}</div>
            </div>
        </div>
        )
    }
}

export default Card;