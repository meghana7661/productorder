import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class AddOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            orderId: '',
            totalAmount: '',
            orderDate: ''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.changeorderIdHandler = this.changeorderIdHandler.bind(this);
        this.changetotalAmountHandler = this.changetotalAmountHandler.bind(this);
        this.changeorderDateHandler = this.changeorderDateHandler.bind(this);
      //  this.saveOrUpdateOrder = this.saveOrUpdateOrder.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.orderId === '_add'){
           return
        }else{
            OrderService.getOrderById(this.state.orderId).then( (res) =>{
                let order = res.data;
                this.setState({
                    orderId: order.orderId,
                    totalAmount: order.totalAmount,
                    orderDate : order.orderDate
                });
            });
        }        
    }
    
    
    
    changeorderIdHandler= (event) => {
       // alert("fName"+event.target.value)
        this.setState({orderId: event.target.value});
    }

    changetotalAmountHandler= (event) => {
      //  alert("lName"+event.target.value)
        this.setState({totalAmount: event.target.value});
    }

    changeorderDateHandler= (event) => {
      //  alert("email"+event.target.value)
        this.setState({orderDate: event.target.value});
    }

    cancel(){
        this.props.handleCancel();
       // this.props.history.push('/orders');
    }
    onSubmit(e) {
        e.preventDefault();
        let order = {orderId: this.state.orderId, totalAmount: this.state.totalAmount, orderDate: this.state.orderDate};
        console.log('order => ' + JSON.stringify(order));

        if (!this.state.orderId || !this.state.totalAmount ) {
            this.setState((state) => ({ ...state, error: 'Please set orderId & amount!' }));
        } else {
            this.setState((state) => ({  ...state,error: '' }));
            this.props.onSubmitOrder(
                
                {
                    orderId: this.state.orderId,
                    totalAmount: this.state.totalAmount,
                   orderDate : this.state.orderDate
                    
                },
                
            );
           // 
        }
        
    }

    getTitle(){
        
            return <h3 className="text-center">Add Order</h3>
        
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container" >
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form onSubmit={this.onSubmit} className='add-order-form' >
                                        <div className = "form-group">
                                            <label> OrderId: </label>
                                            <input placeholder="orderId" required className="form-control" 
                                                value={this.state.orderId} onChange={this.changeorderIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Amount: </label>
                                            <input placeholder="totalAmount" required className="form-control" 
                                                value={this.state.totalAmount} onChange={this.changetotalAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> BillingDate: </label>
                                            <input placeholder="orderDate" required className="form-control" 
                                                value={this.state.orderDate} onChange={this.changeorderDateHandler}/>
                                        </div>
                                        {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}
                                        <button className="btn btn-success" onClick={this.onSubmit} style={{marginLeft: "10px"}}>Add</button>
                                      {/**  <button className="btn btn-success" onClick={this.saveOrUpdateOrder}>UpdateNSave</button> */}
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddOrderComponent

