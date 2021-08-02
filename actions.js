import axios from '../axios/axios';

const _addOrder = (order) => ({
    type: 'ADD_ORDER',
    order
});


export const addOrder = (orderData = {
    orderId: '',
    totalAmount: '',
    orderDate:''
  
}) => {
    return (dispatch) => {
        console.log("in add order action empdata"+orderData.orderDate)
        const order = {
            orderId: orderData.orderId,
            totalAmount: orderData.totalAmount,
            orderDate:orderData.orderDate
        };
        console.log("order dispatch"+order.totalAmount)
        return axios.post('orders', order).then(result => {
            dispatch(_addOrder(result.data));
        });
    };
};

const _editOrder = (id, updates) => ({
    type: 'EDIT_ORDER',
    id,
    updates
});

export const editOrder = (id, updates) => {
    return (dispatch) => {
        return axios.put(`orders/${id}`, updates).then(() => {
            dispatch(_editOrder(id, updates));
        });
    }
};
//return axios.post(ORDER_API_BASE_URL, order);

const _removeOrder = ({ orderId } = {}) => ({
    type: 'REMOVE_ORDER',
    orderId
});

export const removeOrder = (orderId) => {
    console.log("orderId"+orderId);
    return (dispatch) => {
        return axios.delete(`orders/${orderId}`).then(() => {
            dispatch(_removeOrder({ orderId }));
        })
    }
};





const _getOrders = (orders) => ({
    type: 'GET_ORDERs',
    orders
});

export const getOrders = () => {
    return (dispatch) => {
        return axios.get('orders').then(result => {
            const orders = [];

            result.data.forEach(item => {
                orders.push(item);
            });

            dispatch(_getOrders(orders));
        });
    };
};