import React from "react";

class Navbar extends React.Component{
    render(){
        return(
           <React.Fragment>
            <nav className="navbar navbar-dark bg-light navbar-expand-sm">
                <a href="/" className="navbar-brand">Hotel Website</a>

            </nav>
           </React.Fragment>
        )
    }
}
export default Navbar;