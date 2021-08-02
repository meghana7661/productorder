import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/orders";

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_URL+'/');
    }

    addProductOrder(order){
        return axios.post(ORDER_API_BASE_URL, order);
    }

    getOrderById(orderId){
        return axios.get(ORDER_API_BASE_URL + '/' + orderId);
    }

    updateOrder(order, orderId){
        alert("in update orderService")
        return axios.put(ORDER_API_BASE_URL + '/' + orderId, order);
    }

    deleteOrder(orderId){
        alert("in delete orderService")

        return axios.delete(ORDER_API_BASE_URL + '/' + orderId);
    }
}
export default new OrderService()