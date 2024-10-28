import { Button, Form, Input, Modal, notification } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.services';
import { PiUserPlus } from "react-icons/pi";


const UserForm = (props) => {

    const { loadUser } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleOnSubmit = async () => {
        const res = await createUserAPI(fullName, email, phone, password);
        // console.log(">>>check res: ", res.data)
        if (res.data) {
            notification.success({
                message: "Success",
                description: "User successfully created"
            })
            clearDataCloseModal();
            await loadUser();
        }
        else {
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message)
            })
        }
    }

    const clearDataCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPhone("");
        setPassword("");
    }

    return (
        <div className='user-form'>
            <div style={{
                display: "flex", justifyContent: "space-between",
                margin: "30px 20px 20px 20px"
            }}>
                <h3>Table Users</h3>
                <Button
                    style={{ margin: 0, padding: 10 }}
                    onClick={() => setIsModalOpen(true)}
                    type="primary"><PiUserPlus />  Create User </Button>
            </div>

            <Modal title="Create user"
                open={isModalOpen}
                onCancel={() => clearDataCloseModal()}
                onOk={() => handleOnSubmit()}
                okText="Create"
                maskClosable={false}
            >
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
                        marginTop: 30
                    }}>
                    <Form.Item
                        label="Full Name"
                        // name="name"
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
                        // name="email"
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
                        // name="Phone number"
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
                        // name="password"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input.Password
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </Form.Item>
                </Form>
            </Modal>
        </div >
    )
}

export default UserForm;