import {Input, Button, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, processEditTodo } from '../../redux/actions';
import {v4 as uuidv4} from 'uuid'
import { useState, useEffect} from 'react'
import { updatedTodo } from '../../redux/selector';

export default function TodoFrom() {
    const dispatch = useDispatch()
    const [todoInput, setTodoInput] = useState('')
    const [priority, setPriority] = useState('Medium')

    // const todoList = useSelector(todoListSelector)
    // const searchText = useSelector(searchTextSelector)

    const setUpdatedtodo = useSelector(updatedTodo)

    
    useEffect(() => {
        if(setUpdatedtodo){
            //console.log('Update value: ', setUpdatedtodo.name)
            setTodoInput(setUpdatedtodo.name)
            setPriority(setUpdatedtodo.priority)
        }
    },[setUpdatedtodo])
   

    // const handleAddButtonClick = () => {
    //     dispatch(addTodo({
    //         id: uuidv4(),
    //         name: todoInput,
    //         priority: priority,
    //         completed: false
    //     }))
    //     setTodoInput('')
    //     setPriority('Medium')
    // }

    const handleInputChange = (e) => {
        setTodoInput(e.target.value)
    }

    const handleProrityChange = value => {
        setPriority(value)       
    }

    // const handleEdiButtonClick = () => {
    //     dispatch(processEditTodo({
    //         id: setUpdatedtodo.id,
    //         name: todoInput,
    //         priority: priority,
    //         completed: setUpdatedtodo.completed
    //     }))
    //     setTodoInput('')
    //     setPriority('Medium')
    // }

    const handleSubmitButtonClick = () => {
        if(setUpdatedtodo){
            dispatch(processEditTodo({
                id: setUpdatedtodo.id,
                name: todoInput,
                priority: priority,
                completed: setUpdatedtodo.completed
            }))
            setTodoInput('')
            setPriority('Medium')
        }else{
            dispatch(addTodo({
                id: uuidv4(),
                name: todoInput,
                priority: priority,
                completed: false
            }))
            setTodoInput('')
            setPriority('Medium')
        }
    }


    return (       
        <Input.Group style={{ display: 'flex' }} compact>
        <Input 
            value={todoInput}
            onChange={handleInputChange} 
            placeholder='Enter your todo...'         
        />
        <Select 
            defaultValue="Medium"
            value={priority}
            onChange={handleProrityChange}
        >
            <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
            </Select.Option>
        </Select>
        {/* {setUpdatedtodo ? 
            <Button disabled={todoInput === '' ? true : false} type='primary' onClick={handleEdiButtonClick}>Edit</Button>
            : <Button disabled={todoInput === '' ? true : false} type='primary' onClick={handleAddButtonClick}>Add</Button>
        } */}
        <Button disabled={todoInput === '' ? true : false} type='primary' onClick={handleSubmitButtonClick}>{setUpdatedtodo ? 'Edit' : 'Add'}</Button>
        </Input.Group>      
    )
}
