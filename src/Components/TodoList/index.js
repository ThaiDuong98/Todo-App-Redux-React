import { Col, Row } from 'antd';
import Todo from '../Todo';
import { useSelector } from 'react-redux'
import { todosRemainingSelector } from '../../redux/selector';
import TodoFrom from '../TodoForm';

export default function TodoList() {
    const todoList = useSelector(todosRemainingSelector)

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
        <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
            {todoList && todoList.map(todo => (
                <Todo key={todo.id}
                    id={todo.id}
                    name={todo.name} 
                    priority={todo.priority}   
                    completed={todo.completed}      
                />
            ))}         
        </Col>
        <Col span={24}>
            <TodoFrom />
        </Col>
        </Row>
    );
}