import React from "react";


class GithubProfileCard extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
      let {githubProfile} = this.props;
      return (
        <React.Fragment>
            <div className="card mt-3">
            <img src={githubProfile ?.avatar_url} alt="" className="img-fluid"/>
              <div className="card-body">
              
              <p className="h4">{githubProfile.name}</p> 
              <small>{githubProfile.bio}</small><br/>
              <a href={githubProfile.html_url} target="_blank" className="btn btn-primary btn-sm">click</a>
              </div>
            </div>
        </React.Fragment>
      )
    }
}

export default GithubProfileCard; 