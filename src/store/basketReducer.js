
const defaultState = {
    basket : JSON.parse(localStorage.getItem('basketList')) ?? []
}

const ADD_TO_BASKET = 'ADD_TO_BASKET'
const INCR_COUNT_ITEM = 'INCR_COUNT_ITEM'
const DECR_COUNT_ITEM = 'DECR_COUNT_ITEM'
const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET'
const CLEAR_BASKET = 'CLEAR_BASKET'


export const basketReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_TO_BASKET:
            let basket_item = state.basket.find(elem => elem.id === action.payload.id)
            if (basket_item) {
                return {...state, basket: state.basket.map(elem=>{
                    if (elem.id === basket_item.id){
                        elem.count++
                    }
                    return elem
                })}
            } else {
            return {...state, basket:[...state.basket, {...action.payload, count: 1}]}
            }
        case DELETE_FROM_BASKET:
            return {...state, basket: state.basket.filter(elem => elem.id != action.payload)}

        case INCR_COUNT_ITEM:
            return {...state, basket: state.basket.map(elem=>{
                if (elem.id === action.payload){
                    elem.count++
                }
                return elem
            })}
        case DECR_COUNT_ITEM:
            return {...state, basket: state.basket.map(elem=>{
                if (elem.id === action.payload && elem.count !=1){
                     elem.count--
                }
                return elem
            })}
        case CLEAR_BASKET:
            return {...state, basket: []} 
        default:
            return state
    }
}

export const addToBasketAction = (payload) => ({type: ADD_TO_BASKET, payload})
export const incrCountItemAction = (payload) => ({type: INCR_COUNT_ITEM, payload})
export const decrCountItemAction = (payload) => ({type: DECR_COUNT_ITEM, payload})
export const deleteFromBasketAction = (payload) => ({type: DELETE_FROM_BASKET, payload})
export const clearBasketAction = () => ({type: CLEAR_BASKET})