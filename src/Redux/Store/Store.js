import { createStore } from 'redux'
import rootReducer from '../Reducer/Reducer'

const Store = createStore(rootReducer)

export default Store