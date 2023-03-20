import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { basketReducer } from './basketReducer'
import { categoriesReducer } from './categoriesReducer'
import { oneProductReducer } from './oneProductReducer'
import { productsReducer } from './productsReducer'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    oneProduct: oneProductReducer,
    basket: basketReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))