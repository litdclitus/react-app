import { Table, Drawer, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './user.update.modal';
import { useState } from "react";
import ViewUserDetail from './user.view.detail';

const UserTable = (props) => {

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

    const { dataUser, loadUser } = props;

    const [dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setDataDetail] = useState(null);
    const [dataModalOpen, setDataModalOpen] = useState(false);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href="#"
                        onClick={() => {
                            setDataDetail(record);
                            setDataModalOpen(true);
                        }}
                    >{record._id}
                    </a>
                )
            },
        },
        {
            title: 'Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true)
                        }}
                        style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                dataModalOpen={dataModalOpen}
                setDataModalOpen={setDataModalOpen}
            />
        </>
    )
}

export default UserTable;