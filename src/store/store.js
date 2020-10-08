import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import monitorReducerEnhancer from '../enhancers/monitorReducer'
import loggerMiddleware from '../middleware/logger'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'
import initialState from './initialState'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)
 
const store = createStore(reducer, initialState, composedEnhancers)
 
export default props => <Provider store={store} {...props} />