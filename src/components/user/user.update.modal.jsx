import { useEffect, useState } from "react";
import { Form, Input, Modal, notification } from 'antd';
import { updateUserAPI } from "../../services/api.services";

const UpdateUserModal = (props) => {

    const { dataUpdate, setDataUpdate, isModalUpdateOpen, setIsModalUpdateOpen, loadUser } = props;

    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");


    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

    const handleOnSubmit = async () => {
        const res = await updateUserAPI(id, fullName, phone);
        console.log(">>>check res: ", res.data)
        if (res.data) {
            notification.success({
                message: "Success",
                description: "User successfully updated"
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
        setIsModalUpdateOpen(false);
        setId("");
        setFullName("");
        setPhone("");
        setDataUpdate(null);
    }

    return (
        <Modal title="Edit user"
            open={isModalUpdateOpen}
            onCancel={() => clearDataCloseModal()}
            onOk={() => handleOnSubmit()}
            okText="Save"
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
                    label="Id"
                    // name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input
                        value={id}
                        disabled
                    />
                </Form.Item>
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
                        onChange={(event) => {
                            setFullName(event.target.value);
                            // console.log('>>check setFullName: ', setFullNameChange);

                        }}
                    />
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
                        onChange={(event) => {
                            setPhone(event.target.value);
                            // console.log('>>check setPhoneChange: ', setPhoneChange);

                        }} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default UpdateUserModal;