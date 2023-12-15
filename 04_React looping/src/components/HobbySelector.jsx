import React from "react";

class HobbySelector extends React.Component{
   constructor(props) {
    super(props);
     this.state = {
        eating : false,
        coding : false,
        sleeping : false
     }
    
   }

    updateCheck = (event) => {
        this.setState({
            ...this.state,
            [event.target.name] : event.target.checked
        })
    };

   render() {
     return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-header bg-secondary text-white">
                            <p className="h4">Hobby Selector</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                <div class="form-check">
                                <input 
                                  name="eating"
                                  onChange={this.updateCheck}
                                class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" htmlfor="DefaultCheck1">
                                  Eating
                                </label>
                               </div>

                               <div class="form-check">
                               <input
                                 name="coding"
                                 onChange={this.updateCheck}
                                class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                 <label class="form-check-label" htmlfor="DefaultCheck2">
                                   Coding
                                  </label>
                                 </div>

                              <div class="form-check">
                              <input
                               name="sleeping"
                               onChange={this.updateCheck} 
                              class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="form-check-label" htmlfor="DefaultCheck3">
                                Sleeping
                                </label>
                               </div>
                                </div>
                                <div className="col-md-8">
                                    {
                                        this.state.eating ? 
                                        <React.Fragment>
                                          <div className="card animated jello">
                                             <div className="card-header bg-info text-white">
                                               <p className="h3">Eating</p>
                                               <div className="card-body">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cum tempora consequatur autem dignissimos sit, iste modi necessitatibus, laboriosam labore rem enim nihil nostrum quaerat? Sapiente placeat delectus quod maxime.
                                               </div>

                                             </div>
                                          </div>
                                        </React.Fragment> : null
                                    } 

                                    {
                                        this.state.coding ? 
                                        <React.Fragment>
                                          <div className="card animated jello mt-2">
                                             <div className="card-header bg-success text-white">
                                               <p className="h3">Coding</p>
                                               <div className="card-body">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cum tempora consequatur autem dignissimos sit, iste modi necessitatibus, laboriosam labore rem enim nihil nostrum quaerat? Sapiente placeat delectus quod maxime.
                                               </div>

                                             </div>
                                          </div>
                                        </React.Fragment> : null
                                    }

{
                                        this.state.sleeping ? 
                                        <React.Fragment>
                                          <div className="card animated jello bg-danger mt-2">
                                             <div className="card-header bg- text-white">
                                               <p className="h3">Sleeping</p>
                                               <div className="card-body">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cum tempora consequatur autem dignissimos sit, iste modi necessitatibus, laboriosam labore rem enim nihil nostrum quaerat? Sapiente placeat delectus quod maxime.
                                               </div>

                                             </div>
                                          </div>
                                        </React.Fragment> : null
                                    }

                                    

                                </div>
                            </div>
                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
     )
   }
   
}

export default HobbySelector;