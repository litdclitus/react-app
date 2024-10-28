import { Button, Modal, Form, Input, Upload, message, Select, notification, InputNumber } from "antd";
import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import { handleUploadFile, createBookAPI } from "../../services/api.services";


const BookForm = ({ loadBook }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);

    const [mainText, setMainText] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");

    const [fileList, setFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState('');



    const resetAndCloseModal = () => {
        setMainText("");
        setAuthor("");
        setPrice("");
        setQuantity("");
        setCategory("");
        setSelectedFile(null);
        setIsModalOpen(false);
        setFileList([]);
        setPreviewImage('');
    }

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleChange = async (info) => {
        const { fileList: newFileList } = info;
        setFileList(newFileList);

        if (newFileList.length > 0 && newFileList[0].originFileObj) {
            const file = newFileList[0].originFileObj;
            setSelectedFile(file);

            const isUploadSuccessful = await handleUploadFile(file, "book");
            if (!isUploadSuccessful) {
                message.error({
                    message: "Error",
                    description: "Upload failed",
                });
            }
        }
    };


    const handleCreateBook = async () => {
        if (!selectedFile) {
            notification.error({
                message: "Error",
                description: "Please upload a thumbnail",
            });
            return;
        }
        const resUpload = await handleUploadFile(selectedFile, "book");
        if (resUpload.data) {
            const newThumbnail = resUpload.data.fileUploaded;
            const resCreateBook = await createBookAPI(
                newThumbnail, mainText, author, price, quantity, category);
            if (resCreateBook.data) {
                resetAndCloseModal();
                await loadBook();
                notification.success({
                    message: "Success",
                    description: "Create book successfully!",
                });
            } else {
                notification.error({
                    message: "Error",
                    description: JSON.stringify(resCreateBook.message),
                });
            }
        } else {
            notification.error({
                message: "Error",
                description: JSON.stringify(resUpload.message),
            });
        }
    }

    const handleCancel = () => {
        resetAndCloseModal();
    };


    return (
        <div style={{
            fontSize: 19, fontWeight: 600, margin: "30px 20px 20px 20px",
            display: "flex", justifyContent: "space-between"
        }}>
            <div>Books Table</div>
            <Button type="primary" style={{ padding: 10 }}
                onClick={showModal}
            >Create book</Button>
            <Modal title="Create new book"
                open={isModalOpen}
                onOk={handleCreateBook}
                okText="Create"
                maskClosable={false}
                onCancel={handleCancel}>
                <Form
                    name="wrap"
                    layout="vertical"
                    // labelCol={{
                    //     flex: '110px',
                    // }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{
                        flex: 1,
                    }}
                    colon={false}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item
                        label="Title"
                        // name="username"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input value={mainText}
                            onChange={(event) => { setMainText(event.target.value) }} />
                    </Form.Item>

                    <Form.Item
                        label="Author"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input value={author}
                            onChange={(event) => { setAuthor(event.target.value) }} />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        // name="username"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            addonAfter={' VND'}
                            value={price}
                            onChange={(event) => { setPrice(event) }} />
                    </Form.Item>

                    <Form.Item
                        label="Quantity"
                        // name="username"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <InputNumber style={{ width: "100%" }}
                            value={quantity}
                            onChange={(event) => { setQuantity(event) }} />
                    </Form.Item>

                    <Form.Item
                        label="Genre">
                        <Select
                            style={{ width: "100%", marginBottom: 15 }}
                            value={category}
                            onChange={(value) => { setCategory(value) }}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            placeholder="Select a option and change input text above"
                            options={[
                                { value: 'Arts', label: 'Arts' },
                                { value: 'Business', label: 'Business' },
                                { value: 'Comics', label: 'Comics' },
                                { value: 'Cooking', label: 'Cooking' },
                                { value: 'Entertainment', label: 'Entertainment' },
                                { value: 'History', label: 'History' },
                                { value: 'Music', label: 'Music' },
                                { value: 'Sports', label: 'Sports' },
                                { value: 'Teen', label: 'Teen' },
                                { value: 'Travel', label: 'Travel' },
                            ]}
                        >
                        </Select>

                        <Form.Item >
                            <Upload
                                listType="picture-card"
                                onChange={handleChange}
                                onRemove={() => setFileList([])} // Xóa file khi nhấn nút xóa
                                onPreview={null}
                                fileList={fileList}
                            >
                                {fileList.length >= 1 ? null : <Button icon={<UploadOutlined />}>Upload</Button>}
                            </Upload>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </Modal>
        </div >
    )
}

export default BookForm;