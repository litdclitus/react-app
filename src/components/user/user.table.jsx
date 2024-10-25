import { Table, notification, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './user.update.modal';
import { useState } from "react";
import ViewUserDetail from './user.view.detail';
import { deleteUserAPI } from "../../services/api.services";

const UserTable = (props) => {

    const { dataUser, loadUser, current, pageSize, total, setCurrent, setPageSize } = props;


    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

    const [dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setDataDetail] = useState(null);
    const [dataModalOpen, setDataModalOpen] = useState(false);

    const handleOnDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: "Success",
                description: "Delete user successfully"
            })
            loadUser();
        } else {
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message)
            })
        }
    }

    const columns = [
        {
            title: "Order",
            render: (item, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize} </>
                )
            }
        },
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
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }}
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                    />
                    <Popconfirm
                        title="Delete user"
                        description="Are you sure to delete this user?"
                        onConfirm={() => {
                            handleOnDeleteUser(record._id);
                        }}
                        okText="Yes"
                        cancelText="No"
                        placement='bottomLeft'
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </div >
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        //nếu thay đổi trang: current
        if (pagination.current && current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current) //"string" to integer number
            }
        }
        //nếu thay đổi tổng số phần tử: pageSize
        if (pagination.pageSize && pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize) //"string" to integer number
            }
        }
    };

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} on {total} rows</div>) }
                    }}
                onChange={onChange}
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
                loadUser={loadUser}
            />

        </>
    )
}

export default UserTable;