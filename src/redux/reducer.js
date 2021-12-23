

// const initSate = {
//     filters:{
//         search: '',
//         status: 'All',
//         priority: []
//     },
//     todoList: [
//         {
//             id: 1,
//             name: 'learn JS',
//             completed: false,
//             prioriry: 'Medium'
//         },
//         {
//             id: 2,
//             name: 'learn ReactJs',
//             completed: true,
//             prioriry: 'High'
//         }
//     ]
// }
import {combineReducers} from 'redux'
import filtersReducer from "../Components/Filters/FilterSlice"
import todoListReducer from "../Components/TodoList/TodosSlice"

// const reducer = (state={}, action) => {
//    console.log(state, action)
//    return{
//        filters: filtersReducer(state.filters, action),
//        todoList: todoListReducer(state.todoList, action)
//    }
// }

const reducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})

export default reducer
