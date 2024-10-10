import { Table, Tag } from 'antd';

const UserTable = (props) => {

    const { dataUser } = props;

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
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: "phone",
        },
    ];

    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    )
}

export default UserTable;