import React from 'react';

export default class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.onorderIdChange = this.onorderIdChange.bind(this);
        this.ontotaltotalAmountChange = this.ontotalAmountChange.bind(this);
        this.onorderDateChange = this.onorderDateChange.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            flag:false,
            orderId: '',
            totalAmount: '',
            orderDate: '',            
            error: ''
        };
    }

    onFirstNameChange(e) {
        const orderId = e.target.value;
        this.setState((state) => ({ ...state, orderId: orderId }));
    }

    onLastNameChange(e) {
        const totalAmount = e.target.value;
        this.setState((state) => ({ ...state, totalAmount: totalAmount }));
    }

    onEmailIdChange(e) {
        const orderDate = e.target.value;
        this.setState((state) => ({ ...state, orderDate: orderDate }));
    }
   

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.orderId || !this.state.totalAmount || !this.state.orderDate  ) {
            this.setState((state) => ({ ...state, error: "Please input all the required values " }));
        } else {
            this.setState((state) => ({ ...state, error: '' }));
            this.props.onSubmitOrder(
                {
                    orderId: this.state.orderId,
                    totalAmount: this.state.totalAmount,
                    orderDate: this.state.orderDate
                    
                }
            );
        }
    }

    render() {
        return (
            <div> 
                <form onSubmit={this.onSubmit} className="form-group m-4">           
                    <input className="form-control m-1 w-50" required type="text" placeholder="Enter orderId here..." value={this.state.orderId} onChange={this.onOrderIdChange}/>
                    <input className="form-control m-1 w-25" required type="text" placeholder="Enter totalAmount here..."  value={this.state.totalAmount} onChange={this.ontotalAmountChange}/>
                    <input className="form-control m-1 w-50"  required type="text"  placeholder="Enter orderDate here..." value={this.state.orderDate} onChange={this.onorderDateChange}/>
                    
                    {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}
                    <button className="btn btn-primary m-1 w-25">Edit Order</button>
                </form>
            </div>
        );
    }
}