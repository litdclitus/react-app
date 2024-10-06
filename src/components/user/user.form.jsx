import { ConsoleSqlOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, notification } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.services';

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleOnClick = async () => {
        const res = await createUserAPI(fullName, email, phone, password);
        console.log(">>>check res: ", res.data)
        if (res.data) {
            notification.success({
                message: "Success",
                description: "User successfully created"
            })
        }
    }


    return (
        <Form
            name="wrap"
            labelCol={{
                flex: '130px',
            }}
            labelAlign="left"
            labelWrap
            wrapperCol={{
                flex: 1,
            }}
            colon={false}
            style={{
                maxWidth: 700,
                margin: 30
            }}>
            <Form.Item
                label="Full Name"
                name="name"
                rules={[
                    {
                        required: true,
                    },
                ]}>
                <Input
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                    },
                ]}>
                <Input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />
            </Form.Item>
            <Form.Item
                label="Phone number"
                name="Phone number"
                rules={[
                    {
                        required: true,
                    },
                ]}>
                <Input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                    },
                ]}>
                <Input.Password
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} />

            </Form.Item>

            <Form.Item label=" ">
                <Button type="primary" htmlType="submit"
                    onClick={handleOnClick}>
                    Create
                </Button>
            </Form.Item>
        </Form>
    )
}
export default UserForm;