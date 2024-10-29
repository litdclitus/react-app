import { Form, Modal, Input, Upload, Button, message, notification, Select, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { updateBookAPI, handleUploadFile } from '../../services/api.services';


const BookUpdate = (props) => {

    const { dataUpdate, setDataUpdate, dataUpdateModal, setDataUpdateModal, dataDetail, loadBook } = props;

    const [id, setId] = useState("");
    const [mainText, setMainText] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);


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

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id && dataUpdate._id);
            setAuthor(dataUpdate.author);
            setMainText(dataUpdate.mainText);
            setPrice(dataUpdate.price);
            setCategory(dataUpdate.category);
            setQuantity(dataUpdate.quantity);
            setSelectedFile(dataUpdate.selectedFile);
            setPreviewImage(`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataUpdate.thumbnail}`)
        }
    }, [dataUpdate])


    const handleSaveUpdate = async () => {
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
            const resUpdateBook = await updateBookAPI(
                id, newThumbnail, mainText, author, price, quantity, category);
            if (resUpdateBook.data) {
                clearDataCloseModal();
                await loadBook();
                notification.success({
                    message: "Success",
                    description: "Update book successfully!",
                });
            } else {
                notification.error({
                    message: "Error",
                    description: JSON.stringify(resUpdateBook.message),
                });
            }
        } else {
            notification.error({
                message: "Error",
                description: JSON.stringify(resUpload.message),
            });
        }
    }

    const clearDataCloseModal = () => {
        setDataUpdateModal(false);
        setMainText("");
        setAuthor("");
        setPrice("");
        setCategory("");
        setQuantity("");
        setSelectedFile(null);
        setFileList([]);
        setPreviewImage(null);
    }

    return (
        <Modal title="Edit user"
            open={dataUpdateModal}
            onOk={() => {
                handleSaveUpdate();
            }}
            onCancel={clearDataCloseModal}
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
                    label="ID"
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
                    label="Title"
                    // name="mainText"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input
                        value={mainText}
                        onChange={(event) => {
                            setMainText(event.target.value);

                        }}
                    />
                </Form.Item>
                <Form.Item
                    label="Author"
                    // name="author"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input
                        value={author}
                        onChange={(event) => {
                            setAuthor(event.target.value);
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="Price"
                    // name="price"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <InputNumber
                        addonAfter={"VND"}
                        style={{ width: "100%" }}
                        value={price}
                        onChange={(event) => {
                            setPrice(event)
                        }}
                    />
                </Form.Item>
                <Form.Item
                    label="Quantity">
                    <InputNumber
                        style={{ width: "100%" }}
                        value={quantity}
                        onChange={(event) => { setQuantity(event) }}
                    />

                </Form.Item>

                <Form.Item
                    label="Genre"
                    // name="category"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>

                    <Select
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
                </Form.Item>

                <Form.Item>
                    <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }}>
                        <div style={{
                            height: "180px", width: "180px",
                        }}>
                            <img
                                style={{
                                    height: "100%", width: "100%", objectFit: "contain%", borderRadius: 30
                                }}
                                src={previewImage}
                                alt="book image" />
                        </div>
                        <Upload
                            listType="picture-card"
                            onChange={handleChange}
                            onRemove={() => setFileList([])} // Xóa file khi nhấn nút xóa
                            onPreview={null}
                            fileList={fileList}>
                            {fileList.length >= 1 ? null : <Button icon={<UploadOutlined />}>Upload</Button>}
                        </Upload>
                    </div>
                </Form.Item>

            </Form>


        </Modal >
    )
}

export default BookUpdate;