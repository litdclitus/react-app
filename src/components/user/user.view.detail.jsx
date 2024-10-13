import { Drawer, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ViewUserDetail = (props) => {

    const { dataDetail, setDataDetail, dataModalOpen, setDataModalOpen } = props;

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
                        {/* <Button type="primary" icon={<UploadOutlined />} block
                        >Upload avatar</Button> */}
                    </div>
                    <div>
                        <input type="file" id='btnUpload' hidden />
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

            </Drawer >
        </>
    )
}

export default ViewUserDetail;