//ROOT REDUCER IS USED TO COMBINE ALL APPLICATION REDUCERS
import { combineReducers } from 'redux'
import template from './templateReducer'

export default combineReducers({
    //In ES6 if they're the same name you dont have to reference it, it can be just one name
    template: template
})