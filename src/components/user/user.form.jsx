import { Button, Form, Input } from 'antd';

const UserForm = () => {
    return (
        <Form
            name="wrap"
            labelCol={{
                flex: '110px',
            }}
            labelAlign="left"
            labelWrap
            wrapperCol={{
                flex: 1,
            }}
            colon={false}
            style={{
                maxWidth: 600,
                margin: 20
            }}>
            <Form.Item
                label="Full Name"
                name="name"
                rules={[
                    {
                        required: true,
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone number"
                name="number"
                rules={[
                    {
                        required: false,
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                    },
                ]}>
                <Input.Password />

            </Form.Item>

            <Form.Item label=" ">
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
export default UserForm;