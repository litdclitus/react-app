import { Form, Input, Button, notification, Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import { registerUserAPI } from "../services/api.services";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { ArrowRightOutlined } from '@ant-design/icons';
import { FaRegUser } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosPhonePortrait } from "react-icons/io";
import { PiPasswordDuotone } from "react-icons/pi";



const RegisterPage = () => {

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = async (values) => {
        //call api
        const res = await registerUserAPI(values.fullName, values.email, values.phone, values.password)
        if (res.data) {
            notification.success({
                message: "Success",
                description: "Created user successfully"
            })
            navigate("/login");
        } else {
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message)
            })
        }
    };

    return (
        <div className="register-page">
            <Form className="register-form"
                form={form}
                layout="vertical"
                onFinish={onFinish}
                style={{ margin: 20 }}
            // onFinishFailed={onFinishFailed}
            // autoComplete="off"
            >
                <div className="register-row__title">
                    Registration
                </div>
                <Row className="register-row" justify={"center"}>
                    <Col className="register-col" xs={24} md={12}>
                        <Form.Item className="register-item"
                            // label="Full name"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}>
                            <Input prefix={<i><FaRegUser /></i>} className="input-field" placeholder="Full name" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row className="register-row" justify={"center"}>
                    <Col className="register-col" xs={24} md={12}>
                        <Form.Item
                            // label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                },
                            ]}>
                            <Input prefix={<i><AiTwotoneMail /></i>} className="input-field" placeholder="Email" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row className="register-row" justify={"center"}>
                    <Col className="register-col" xs={24} md={12}>
                        <Form.Item
                            // label="Phone number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                },
                                {
                                    pattern: new RegExp(/\d+/g),
                                    message: "The phone number provided is not valid or contains invalid characters"
                                }
                            ]}>
                            <Input prefix={<i><IoIosPhonePortrait /></i>} className="input-field" placeholder="Phone number" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row className="register-row" justify={"center"}>
                    <Col className="register-col" xs={24} md={12}>
                        <Form.Item
                            // label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}>
                            <Input.Password prefix={<i><PiPasswordDuotone /></i>} className="input-field" placeholder="Password" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col style={{ display: "flex", justifyContent: "space-between" }} xs={24} md={12}>
                        <Button style={{ marginBottom: 10, }} type="primary" htmlType="submit"
                            onClick={() => { form.submit }}>
                            Submit
                        </Button>
                        <Link to="/">Go to Dashboard <ArrowRightOutlined /></Link>
                    </Col>
                    <Divider style={{ color: "white" }} dashed>Already have an account? <Link to="/login">Log in now</Link></Divider>
                </Row>
            </Form>
        </div >
    )
}

export default RegisterPage;