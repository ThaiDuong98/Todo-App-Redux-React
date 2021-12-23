import { createStore } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools()
//enhancers là middleware
const store = createStore(reducer, composeEnhancers)

export default store