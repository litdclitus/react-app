import { Drawer } from 'antd';
import { useState } from 'react';

const ViewUserDetail = (props) => {

    const { dataDetail, setDataDetail, dataModalOpen, setDataModalOpen } = props;

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer title="User information" onClose={() => {
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