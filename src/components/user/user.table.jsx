import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';

const UserTable = () => {

    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, [])

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Phone',
            dataIndex: "phone",
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUser(res.data);
    }

    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    )
}


export default UserTable;