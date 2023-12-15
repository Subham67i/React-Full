 import React from "react";

 class GithubProfileDetails extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
      let {githubProfile} = this.props;
      return (
        <React.Fragment>
           <div className="card mt-3">
            <div className="card-header">
                <span className="badge badge-success ml-2">{githubProfile.followers}Followers</span>
                <span className="badge badge-warning ml-2">{githubProfile.public_repos}Repos</span>
                <span className="badge badge-secondary ml-2">{githubProfile.public_gists}Gists</span>
                <span className="badge badge-danger ml-2">{githubProfile.following}Following</span>
            </div>
            <div className="card-body ">
                <ul className="list-group">
                  <li className="list-group-item">
                      NAME : <span className="font-weight-bold">{githubProfile.name}</span>
                  </li>
                  <li className="list-group-item">
                      LOCATION : <span className="">{githubProfile.location}</span>
                  </li>
                  <li className="list-group-item">
                      EMAIL : <span className="">{githubProfile.email}</span>
                  </li>
                  <li className="list-group-item">
                      COMPANY : <span className="">{githubProfile.company}</span>
                  </li>
                  <li className="list-group-item">
                       BLOG : <span><a href={githubProfile.blog} target="_blank">blog</a></span>
                  </li>
                  <li className="list-group-item">
                    PROFILE URL : <span><a href={githubProfile.html_url} target="_blank">{githubProfile.html_url}</a></span>
                  </li>
                  
                </ul>
            </div>
           </div>
       </React.Fragment>
      )
    }
    
 }

 export default GithubProfileDetails;