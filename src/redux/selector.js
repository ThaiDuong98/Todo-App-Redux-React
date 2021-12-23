import {createSelector} from 'reselect'

// export const todoListSelector = (state) => state.todoList

// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state)
//     const todosRemaining = state.todoList.filter(todo => {
//         return todo.name.includes(searchText)
//     })
//     return todosRemaining
// }

export const updatedTodo = (state) => state.todoList.updatedTodo

export const todoListSelector = (state) => state.todoList.todoList
export const searchTextSelector = (state) => state.filters.search
export const filterStatusSelector = (state) => state.filters.status
export const filterprioritiesSelector = (state) => state.filters.priority

export const todosRemainingSelector = createSelector(
    todoListSelector, 
    filterStatusSelector,
    searchTextSelector,
    filterprioritiesSelector,
    (todoList, status, searchText, priorities) => { //status: All, Completed, Todo      
        return todoList.filter(todo => {
            if(status === 'All'){
                return priorities.length
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText) 
            }

            return (
                todo.name.includes(searchText) && 
                (status === 'Completed' ? todo.completed : !todo.completed)
                && (priorities.length ? priorities.includes(todo.priority) : true)
            )
        })       
    }
)