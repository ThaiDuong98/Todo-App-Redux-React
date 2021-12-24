import { Row, Tag, Checkbox, Button } from 'antd';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { deleteTodo, toggleTodoStatus, setEditTodo } from '../../redux/actions';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority,completed, id }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch()

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id))
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id))
    
  }

  const handleSetEditTodo = () => {
    //console.log(id)
    dispatch(setEditTodo(id))
  }

  return (
    <>
      <Row
      justify='space-between'
      >
        <Checkbox 
          checked={checked} 
          onChange={toggleCheckbox} 
          style={{
            marginBottom: 3,
            ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
          }}
        >
          {name} &nbsp;&nbsp; 
          <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
            {priority}
          </Tag>
        </Checkbox>
        <div>
          <Button size='small' type="primary" ghost onClick={handleSetEditTodo}>
            <EditOutlined />
          </Button>
          &nbsp;
          <Button size='small' danger ghost onClick={handleDeleteTodo}>
            <DeleteOutlined />
          </Button>
        </div>
      </Row>
     
    </>
  );
}