const initSate = {
    todoList:  [
        {
            id: 1,
            name: 'learn JS',
            completed: false,
            priority: 'Medium'
        },
        {
            id: 2,
            name: 'learn ReactJs',
            completed: true,
            priority: 'High'
        }
    ],
    updatedTodo: undefined
}


const todoListReducer = (state = initSate, action) => {

   console.log(state, action)
   switch(action.type){
       case 'todoList/addTodo':
           return {
               ...state,
               todoList: [...state.todoList, action.payload]
           }
        case 'todoList/toggleTodoStatus':
            const newStates = [...state.todoList]
            const toggleTotos = newStates.map(todo => 
                todo.id === action.payload ? 
                 {...todo, completed: !todo.completed} 
                 : todo     
             )
            return {
                ...state,
                todoList: toggleTotos
            }
        case 'todoList/deleteTodo':
            const deteteTodos = [...state.todoList]
            const resultDeleteTodo = deteteTodos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todoList: resultDeleteTodo
            }
        case 'todoList/setEditTodo':
            const editTodos = [...state.todoList]
            const checkIndex = editTodos.findIndex(todo => todo.id === action.payload)
            
            return {
                ...state,
                updatedTodo: state.todoList[checkIndex]
            }
        case 'todoList/processEditTodo':
            const newTodos = [...state.todoList]
            const index = newTodos.findIndex(todo => todo.id === action.payload.id)
            if(index >= 0){
                const result = action.payload
                newTodos[index] = result
            }

            return {
                ...state,
                todoList: newTodos,
                updatedTodo: undefined
            }

        default:
            return state
   }
}

export default todoListReducer
