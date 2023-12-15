import React from "react";

class HobbySelectorRadio extends React.Component{
   constructor(props) {
    super(props);
     this.state = {
         hobby : null,
     }
    
   }

    updateCheck = (event) => {
        this.setState({
            hobby : event.target.value
        })
    };

   render() {
     return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-secondary text-white">
                            <p className="h4">Hobby Selector</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                         <form>

                                      <div class="form-check">
                               <input 
                               onChange={this.updateCheck}
                               class="form-check-input" value="eating" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                 <label class="form-check-label" for="flexRadioDefault1">
                                Eating
                               </label>
                                </div>

                             <div class="form-check">
                                 <input
                                  onChange={this.updateCheck}
                                 class="form-check-input" value="coding" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                              <label class="form-check-label" for="flexRadioDefault2">
                                 Coding
                               </label>
                               </div>

                            <div class="form-check">
                              <input 
                              onChange={this.updateCheck}
                              class="form-check-input" value="sleeping" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                 Sleeping
                              </label>
                               </div>

                                      </form>
                                 </div>
                                <div className="col-md-8">
                                    {
                                        this.state.hobby === "eating" ? 
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
                                        this.state.hobby === "coding" ? 
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
                                        this.state.hobby === "sleeping" ? 
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

export default HobbySelectorRadio;