import { React, useContext, useState } from 'react';
import { LockOutlined, MailOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Row, Col, Divider, message, notification } from 'antd';
import { Link } from "react-router-dom";
import "./login.css"
import { loginAPI } from '../services/api.services';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../components/context/auth.context';


const LoginPage = () => {

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { setUserLogin } = useContext(AuthContext);


    const onFinish = async (values) => {
        setLoading(true);
        const res = await loginAPI(values.email, values.password);
        if (res.data) {
            message.success("Login successfully!");
            localStorage.setItem("access_token", res.data.access_token);
            setUserLogin(res.data.user);
            navigate("/");
        }
        else {
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message),
            })
        }
        setLoading(false);
    };

    return (
        <div className='login-container'>
            <fieldset className='login-page'>
                <legend style={{ marginBottom: 15, color: "white", fontWeight: 700, fontSize: 20 }}>Log in</legend>
                <Form
                    form={form}
                    name="login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Row className="login-row" justify={"center"}>
                        <Col className="login-col" xs={24} md={12}>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: "email",
                                    },
                                ]}
                            >
                                <Input className='login-input' prefix={<MailOutlined />} placeholder="Email" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row className="login-row" justify={"center"}>
                        <Col className="login-col" xs={24} md={12}>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row className="login-row" justify={"center"}>
                        <Col className="login-col" xs={24} md={12} lg={12}>
                            <Form.Item>
                                <Flex justify="space-between" align="center">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                </Flex>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row justify={"center"}>
                        <Col style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            xs={24} md={14} lg={12}>
                            <Button
                                loading={loading}
                                style={{ marginBottom: 10 }}
                                type="primary" htmlType="submit"
                                onClick={() => { form.submit }}>
                                Sign in
                            </Button>
                            <Link to="/">Go to Dashboard <ArrowRightOutlined /></Link>
                        </Col>
                        <Divider dashed>Do not have an account? <Link to="/register">Sign up now</Link></Divider>
                    </Row>
                </Form>
            </fieldset>
        </div>
    )
}

export default LoginPage;