import { Drawer, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';

const ViewUserDetail = (props) => {

    const { dataDetail, setDataDetail, dataModalOpen, setDataModalOpen } = props;

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

    console.log(">>check preview: ", preview)

    return (
        <>
            <Drawer
                width={"40vw"}
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
                        marginTop: 20, marginBottom: 20,
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
                            backgroundColor: "#24a0ed", color: "white",
                            padding: 10, fontFamily: "sans-serif",
                            borderRadius: 20, cursor: "pointer",
                            marginLeft: "auto", marginRight: "auto",
                            display: "block", textAlign: "center"
                        }}
                            htmlFor="btnUpload">
                            <UploadOutlined style={{ marginRight: 7 }} />
                            Upload avatar</label>
                    </div>
                </>
                    :
                    <>
                        <p>No information available</p>
                    </>
                }
                {preview &&
                    <div style={{
                        display: "block",
                        height: "80px", width: "80px",
                        border: "1px solid #ccc",
                        marginTop: 20, marginBottom: 10,
                        // marginLeft: "auto", marginRight: "auto"
                    }}>
                        <img
                            style={{
                                height: "100%", width: "100%", objectFit: "contain%",
                            }}
                            src={`${preview}`
                            } alt="avatar" />
                    </div>
                }

            </Drawer >
        </>
    )
}

export default ViewUserDetail;