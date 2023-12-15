import React from "react";

class CarSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCar : ' '
        }
        
    }

    //updateOption
    updateOption = (event) => {
          this.setState({
            selectedCar : event.target.value
          });
    };

    render() {
      return (
        <React.Fragment>
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-secondary text-white">
                           <p className="h4 ">Select a Car</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <form>
                                        <div className="form-group">
                                            <select className="form-control" 
                                                   value={this.state.selectedCar}
                                                   onChange={this.updateOption}>
                                                <option value="">Select a Car</option>
                                                <option  value="BMW">MBW </option>
                                                <option value="Audi">Audi</option>
                                                <option value="Jaguar">Jaguar</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="Jeep">Jeep</option>
                                                <option value="Thar">Thar</option> 
                                                <option value="Kia Seltos">Kia Seltos</option>
                                                <option value="Tata Safari">Tata Safari</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div className="col">
                                    <p className="h3">{this.state.selectedCar}</p> 
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

export default CarSelector;