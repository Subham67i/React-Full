import React from "react";

class Contact extends React.Component{
    render(){
        return(
          <React.Fragment>
            <div className="container mt-5 mb-5 ">
                <div className="row ">
                    <div className="col-md-6">
                      <div className="card-body  ">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.04397727282!2d76.78222047558086!3d30.745266174578227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a09098a47aa89%3A0xc0ef30e113006e91!2sTaj%20Chandigarh!5e0!3m2!1sen!2sin!4v1695978062979!5m2!1sen!2sin" width="400" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                      </div>
                </div>
                     <div className="col-md-6 mb-5">
                        <div className="card ">
                            <div className="card-header bg-dark text-white ">
                               <p className="h4">Contact Us</p>
                            </div>
                            <div className="card-body bg-light  ">
                                 <form>
                                    <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name"/> 
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="email"/> 
                                    </div>
                                    <div className="form-group">
                                       <textarea rows="4" className="form-control"/>
                                    </div>
                                    <div>
                                        <input type="submit" className="btn btn-dark btn-sm" value="Contact"/>
                                    </div>
                                 </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </React.Fragment>
        )
    }
}
export default Contact;