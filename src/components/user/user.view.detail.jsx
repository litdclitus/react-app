import { Drawer, Button, notification, message, Descriptions } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { handleUploadFile, updateAvatarUserAPI } from '../../services/api.services';

const ViewUserDetail = (props) => {

    const { dataDetail, setDataDetail, dataModalOpen, setDataModalOpen, loadUser } = props;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleOnChangeUpload = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        // I've kept this example simple by using the first image instead of multiple
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleUpdateAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            const resUpdate = await updateAvatarUserAPI(newAvatar, dataDetail._id,
                dataDetail.fullName, dataDetail.phone);
            if (resUpdate.data) {
                setDataModalOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: "Success",
                    description: "Profile image was updated"
                })
            }
            else {
                notification.error({
                    message: "Error",
                    description: JSON.stringify(resUpdate.message)
                })
            }
        }

        else {
            notification.error({
                message: "Error",
                description: JSON.stringify(resUpload.message)
            })
        }
    }

    return (
        <>
            <Drawer
                width={"38vw"}
                title="User information"
                onClose={() => {
                    setDataDetail(null)
                    setDataModalOpen(false)
                }}
                open={dataModalOpen}>
                {dataDetail ? <>
                    <p>Id: {dataDetail._id}</p>
                    <br />
                    <p>Full name: {dataDetail.fullName}</p>
                    <br />
                    <p>Email: {dataDetail.email}</p>
                    <br />
                    <p>Phone number: {dataDetail.phone}</p>
                    <br />
                    <div style={{
                        display: "block",
                        height: "200px", width: "200px",
                        border: "1px solid #ccc", borderRadius: 30,
                        marginTop: 10, marginBottom: 15,
                        marginLeft: "auto", marginRight: "auto"
                    }}>
                        <img
                            style={{
                                height: "100%", width: "100%", objectFit: "contain%", borderRadius: 30
                            }}
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`
                            } alt="avatar" />
                    </div>
                    <div>
                        <input type="file" id='btnUpload' hidden
                            onChange={(event) => { handleOnChangeUpload(event) }}
                        />
                        <label style={{
                            backgroundColor: "#24a0ed", color: "white", width: "30%",
                            padding: 10, fontFamily: "sans-serif",
                            borderRadius: 20, cursor: "pointer",
                            marginLeft: "auto", marginRight: "auto",
                            display: "block", textAlign: "center",
                        }}
                            htmlFor="btnUpload">
                            <UploadOutlined style={{ marginRight: 6 }} />
                            Upload a file</label>
                    </div>
                </>
                    :
                    <>
                        <p>No information available</p>
                    </>
                }
                {preview &&
                    <>
                        <div style={{
                            display: "flex",
                            height: "150px", width: "100%",
                            border: "1px dashed #ccc",
                            marginTop: 20, marginBottom: 10, justifyContent: "center",
                        }}>
                            <img
                                style={{
                                    height: "120px", width: "120px", objectFit: "contain%", marginBottom: 6,
                                    border: "1px solid #ccc", margin: "auto", display: "block",
                                }}
                                src={`${preview}`
                                } alt="avatar" />
                        </div>
                        <Button
                            style={{ width: "50%", margin: "auto", display: "block" }} type='primary'
                            onClick={() => handleUpdateAvatar()}>Save</Button>
                    </>
                }

            </Drawer >
        </>
    )
}

export default ViewUserDetail;