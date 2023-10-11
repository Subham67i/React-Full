import React from "react";

class Student extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          image : 'https://images.deccanherald.com/deccanherald/2023-10/40a4bb11-75b0-4ced-9670-9a2766c90246/MSD_Hairdo.jpg?w=640&mode=crop&ar=3:4',
          name : 'MS Dhoni',
          age : 45,
          role : 'Wicketkeeper , Batsman',
          hight : '5 fit',
          address : 'Jharkhand, Rachi'
        }
        
    }

    render() {
      return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-info text-white">
                                <p className="h4"> indain crickter details</p>
                            </div>
                            <div className="card-body bg-light">
                                <div className="row">
                                    <div className="col-md-4">
                                      <img src={this.state.image} className="img-fluid img-thumnail"/>
                                    </div>
                                    <div className="col-md-8 mt-2">
                                      <ul className="list-group">
                                        <li className="list-group-item">
                                           NMAE : {this.state.name}
                                        </li>
                                        <li className="list-group-item">
                                            AGE : {this.state.age}
                                        </li>
                                        <li className="list-group-item">
                                           ROLE : {this.state.role}
                                        </li>
                                        <li className="list-group-item">
                                            HIGHT : {this.state.hight}
                                        </li>
                                        <li className="list-group-item">
                                            ADDRESS : {this.state.address}
                                        </li>
                                      </ul>
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

export default Student;