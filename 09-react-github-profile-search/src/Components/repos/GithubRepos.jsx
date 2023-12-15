import React from "react";

class GithubRepos extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
      let {githubRepos} = this.props;
      return (
        <React.Fragment>
        <div className="card">
          <div className="card-header">
             <p className="h4">YOUR REPOSITORIES</p>
          </div>
          <div className="card-body">
               <ul className="list-group">
                 {
                  githubRepos.map(repo => {
                    return(
                      <React.Fragment>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-between">
                           <span className="h4">
                            <a href={repo.html_url} target="_blank">{repo.name}</a>
                           </span>
                           <span className="badge badge-success">{repo.stargazers_count}Stars</span>
                           <span className="badge badge-warning">{repo.watchers_count}watchers</span>
                           </div>
                        </li>
                      </React.Fragment>
                    )
                  })
                 }
               </ul>
          </div>
        </div>
    </React.Fragment>
      )
    }
}

export default GithubRepos;