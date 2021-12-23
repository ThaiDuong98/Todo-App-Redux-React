
//action object
// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: {id: 2, name: 'learn ReactJs',completed: true, priority: 'High'}
// }

//action creator => function
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'todoList/deleteTodo',
        payload: id
    }
}

export const setEditTodo = (id) => {
    return {
        type: 'todoList/setEditTodo',
        payload: id
    }
}

export const processEditTodo = (data) => {
    return {
        type: 'todoList/processEditTodo',
        payload: data
    }
}

//------------------------------------

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = status => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = priorities => {
    return {
        type: 'filters/priorityFilterChange',
        payload: priorities
    }
}

