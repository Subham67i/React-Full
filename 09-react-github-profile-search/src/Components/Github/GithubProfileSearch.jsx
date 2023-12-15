import React from "react";
import Axios from 'axios';
import { CLIENT_ID } from "./credential/GithubCredential";
import { CLIENT_SECRETS } from "./credential/GithubCredential";
import GithubProfile from "./Profile/GithubProfie";
import GithubRepos from "../repos/GithubRepos";




class GithubProfileSearch extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
        githubUsername : '',
        githubProfile : {},
        githubRepos : [],
        errorMessage : ''
       }
        
    }

    submitSearchUser = (e) => {
    e.preventDefault();
    this.searchProfile(this.state.githubUsername);
    this.searchRepos(this.state.githubUsername);
    
    }

   
    // search profile 
    searchProfile = (githubUsername) => {
        let dataURL = `https://api.github.com/users/${githubUsername} ?client_id=${CLIENT_ID} &Client_secret=${CLIENT_SECRETS}`;
        Axios.get(dataURL).then((response) => {
           this.setState({
            ...this.state,
            githubProfile : response.data
           })
        }).catch((error)=> {
           this.setState({
            ...this.state,
            errorMessage : error.message
           })
        })
    }

     // search reops 
     searchRepos = (githubUsername) =>{
        let dataURL = `https://api.github.com/users/${githubUsername}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRETS}`;
        Axios.get(dataURL).then((response)=>{
          this.setState({
              ...this.state,
              githubRepos : response.data
          })
        }).catch((error)=>{
           this.setState({
              ...this.state,
              errorMessage : error.message
           })
        })
      }
  

    render() {
      return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(this.state.githubProfile)}</pre> */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-dark text-white"> 
                            <p className="h4"> Github Profile Search</p>
                            </div>
                            <div className="card-body">
                               <form className="form-inline" onSubmit={this.submitSearchUser}>
                                <div className="form-group">
                                    <input 
                                    value={this.state.githubUsername} 
                                    onChange={e => this.setState({...this.state,githubUsername : e.target.value})}
                                     size="40" type="text" className="form-control" placeholder="Github User Name"/>
                                </div>
                                <div>
                                    <input type="submit" value="Search" className="btn btn-primary btn-sm"  />
                                </div>
                               </form>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="row">
                    <div className="col">
                       {
                        Object.keys(this.state.githubProfile).length > 0 ?
                        <React.Fragment>
                             <GithubProfile githubProfile={this.state.githubProfile}/>
                        </React.Fragment> : null
                       }
                    </div>
                </div>
                <div className="row">
                   <div className="col">
                    {
                        this.state.githubRepos.length > 0 ? 
                        <React.Fragment>
                              <GithubRepos githubRepos={this.state.githubRepos}/>
                        </React.Fragment> : null
                    }
                   </div>
                </div>
            </div>
            
        </React.Fragment>
      )
    }
    
}

export default GithubProfileSearch;