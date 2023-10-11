import React from "react";

class InfoBox extends React.Component{
    render(){
        return(
          <React.Fragment>
              <div className="section">
              <section className="p-3 bg-dark text-white  mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col ">
                            <h5 className="display-4">Ultimate Destination</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                        </div>
                    </div>
                </div>
              </section>
              </div>
          </React.Fragment>
        );
    };
};
export default InfoBox;
