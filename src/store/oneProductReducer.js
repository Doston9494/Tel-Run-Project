const defaultState = {
    oneProduct: {}
}

const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

export const oneProductReducer = (state = defaultState, action) => {
    switch(action.type){
        case GET_ONE_PRODUCT:
            return {...state, oneProduct: action.payload}
        default:
            return state
    }
}

export const getOneProductAction = (payload) => ({type: GET_ONE_PRODUCT, payload})