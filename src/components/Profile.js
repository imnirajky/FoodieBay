import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:{
                name: "User",
                avatar_url: "https://media.istockphoto.com/id/1302436578/video/loading-circle-icon-animation-on-black-background-4k-video-loopable-preloader.jpg?s=640x640&k=20&c=WiK1w7O6VvTD7Xu7Ov8DdzGY2lX2bSlJDxw4r4DHzfI="
            }
        }
    }

    async componentDidMount(){
        const data =  await fetch("https://api.github.com/users/imnirajky");
        const json =  await data.json();
        this.setState({
            user:json
        });
    }

    render(){
        return (
        <div>
            <img src={this.state.user.avatar_url} alt="profile_pic" />
            <h2>{this.state.user.name}</h2>
        </div>
        
        );
    }
}


export default Profile;