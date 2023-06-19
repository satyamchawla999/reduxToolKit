import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Dropdown,
  MenuProps
} from 'antd';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../features/todo/todoSlice';
import { useRef } from 'react';

const FormSection = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.todo.user);
  const formRef = useRef(null)

  const onFinish = (values) => {

    let date = `${values.deadline.$D}-${values.deadline.$M}-${values.deadline.$y}`;
    console.log(date)

    const task = {
      "name": values.name,
      "description": values.description,
      "deadline": date
    }

    dispatch(addTask(task));
    formRef.current.resetFields()
  }

  return (
    <div className="formSection">
      <h2>ToDo List</h2>

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        ref={formRef}
      >

        <Form.Item name="description">
          <Input />
        </Form.Item>

        <Form.Item name="name">
          <Select>

            {users.map((user) => (<Select.Option key={user.id} value={user.name}>{user.name}</Select.Option>))}
          </Select>
        </Form.Item>



        <Form.Item name="deadline">
          <DatePicker />
        </Form.Item>
        <Form.Item >
          <Button htmlType="submit">Button</Button>
        </Form.Item>

      </Form>


    </div>
  );
}

export default FormSection;
