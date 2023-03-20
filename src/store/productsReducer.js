const defaultState = {
    products: []
}

const GET_PRODUCTS = 'GET_PRODUCTS'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const FILTER_SALES_PRODUCTS = 'FILTER_SALES_PRODUCTS'
const FILTER_PRICE_PRODUCTS = 'FILTER_PRICE_PRODUCTS'

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.payload.map(elem => ({...elem, show_by_sale: true, show_by_price: true}))}
        case SORT_PRODUCTS:
            if (action.payload === '1'){
                return {...state, products: state.products.slice().sort((crElem,nxElem) => nxElem.discont_price - crElem.discont_price)}
            } else if (action.payload === '2'){
                return {...state, products: state.products.slice().sort((crElem,nxElem) => crElem.discont_price - nxElem.discont_price)}
            } else if (action.payload === '0'){
                return {...state, products: state.products.slice().sort((crElem,nxElem) => crElem.id - nxElem.id)}
            } else {
                return state
            }
        case FILTER_SALES_PRODUCTS:
            if (action.payload){
                return {...state, products: state.products.map(elem => {
                    if (elem.discont_price - elem.price ==  0){
                        elem.show_by_sale = false
                    }
                    return elem
                })}
            } else {
                return {...state, products: state.products.map(elem => ({...elem, show_by_sale: true }))}
            }
        case FILTER_PRICE_PRODUCTS:
            let showProducts = state.products.map(elem => ({...elem, show_by_price: true }))
            return {...state, products: showProducts.map(elem => {
                if (!(elem.discont_price >= action.payload.min_price && elem.discont_price <= action.payload.max_price)){
                    elem.show_by_price = false
                }
                return elem
            }) }

        default:
            return state      
    }
}

export const getProductsAction = (payload) => ({type: GET_PRODUCTS, payload})
export const sortProductsAction = (payload) => ({type: SORT_PRODUCTS, payload})
export const filterSalesProductsAction = (payload) => ({type: FILTER_SALES_PRODUCTS, payload})

export const filterPriceProductsAction = (payload) => {
    payload.max_price = (payload.max_price) ? +payload.max_price : Infinity
    payload.min_price = (payload.min_price) ? +payload.min_price : -Infinity
    
    return{
        type: FILTER_PRICE_PRODUCTS,
        payload
    }
}