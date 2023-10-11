import React from "react";


class ProductItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product : {
               id : 'AA10BCS',
               image : 'https://duet-cdn.vox-cdn.com/thumbor/0x0:2048x1365/2400x1600/filters:focal(546x1080:547x1081):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24840316/236738_Corsair_K70_Max_hands_on_JPorter_008.jpg',
               name : 'keyboard',
               qty : 1,
               price : 499
               
            }
        }
        
    }
//-----------------
    incrQty = () => {
        this.setState({
           product : {
            ...this.state.product,
              qty : this.state.product.qty + 1
           }
        });
    };
//-----------------
    decrQty = () => {
        this.setState({
           product : {
            ...this.state.product,
              qty : (this.state.product.qty - 1) > 0 ? this.state.product.qty - 1 : 1
           }
        });
    };
 

    render() {
        let { id,image, name, qty, price,  total } = this.state.product;
      return (
        <React.Fragment>
        <div className="container mt-3">
           <div className="row">
            <div className="col">
                <p className="h4 text-primary">Products Cart</p>
                <p className="lead"> A product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form. Every product</p>
            </div>
           </div>
           {/* <pre>{JSON.stringify(this.state.product)}</pre> loking data in front page */}
           <div className="row">
            <div className="col">
                <table className="table  table-hover text-center table-striped table-light  ">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>
                                <img  src={image} alt="" width="50" height="50"/>
                            </td>
                            <td>{name}</td>
                            <td> &#8377;{price.toFixed(2)}</td>
                            <td>
                                <i className="fa fa-minus-circle mx-1 " onClick={this.decrQty}/>
                                {qty}
                                <i className="fa fa-plus-circle mx-1" onClick={this.incrQty}/>
                            </td>
                            <td>&#8377;{(price * qty).toFixed(2)}</td>
                             
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>
                                <img  src={image} alt="" width="50" height="50"/>
                            </td>
                            <td>{name}</td>
                            <td> &#8377;{price.toFixed(2)}</td>
                            <td>
                                <i className="fa fa-minus-circle mx-1 " onClick={this.decrQty}/>
                                {qty}
                                <i className="fa fa-plus-circle mx-1" onClick={this.incrQty}/>
                            </td>
                            <td>&#8377;{(price * qty).toFixed(2)}</td>
                             
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>
                                <img  src={image} alt="" width="50" height="50"/>
                            </td>
                            <td>{name}</td>
                            <td> &#8377;{price.toFixed(2)}</td>
                            <td>
                                <i className="fa fa-minus-circle mx-1 " onClick={this.decrQty}/>
                                {qty}
                                <i className="fa fa-plus-circle mx-1" onClick={this.incrQty}/>
                            </td>
                            <td>&#8377;{(price * qty).toFixed(2)}</td>
                             
                        </tr>
                    </tbody>f
                </table>
            </div>
           </div>
        </div>
        </React.Fragment>
      )
    }
    
}

export default ProductItem;