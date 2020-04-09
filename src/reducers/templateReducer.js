import {TESTCASE1, TESTCASE_ADD, TESTCASE_DELETE} from '../actions/actionTypes'
let templateReducer = (state, action) => {
    //inititlaize state
    if(state === undefined){
        state = {
            count : 0,
            someArray : []
        }
    }
    switch(action.type){
        case TESTCASE1:
            return{
                ...state,
                count  :state.count + action.count
            }
        case TESTCASE_ADD:
            //adding into array
            return{
                ...state,
                someArray: state.someArray.concat(action.data)
                }
        case  TESTCASE_DELETE:
            let filteredArray = state.someArray.filter(item =>{
                //True = will not delete - False = will delete
                return item.id != action.id
            })
            return{
                ...state,
                someArray : filteredArray
            }
        default:
            return state;       
    }
}
export default templateReducer
