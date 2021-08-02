const ordersReducerDefaultState = [];

export default (state = ordersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return [
                ...state,
                action.order
            ];
        
     case 'REMOVE_ORDER':
            return state.filter(({ orderId }) => orderId !== action.orderId);
        
     case 'EDIT_FIRST_ORDER':
             return state.map((order)=>order.id === action.orderId ? {...order,editing:!order.editing}:order)
    
    case 'EDIT_ORDER':
            return state.map((order) => {
                alert("hi")
                if (order.orderId === action.orderId) {
                    return {
                        ...order,
                        ...action.updates
                    };
                } else {
                    return order;
                }
            });
 
            


        case 'GET_ORDERs':
            return action.orders;
        default:
            return state;
    }
};