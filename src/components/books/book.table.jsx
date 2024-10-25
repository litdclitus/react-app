import { Table, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const BookTable = (props) => {

    const { bookData, setBookData, current, setCurrent,
        pageSize, setPageSize, total, setTotal } = props;

    const columns = [
        {
            title: 'Order',
            render: (item, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize} </>
                )
            }
        },

        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href="">{record._id}</a>
                )
            }
        },

        {
            title: 'Title',
            dataIndex: 'mainText',
        },

        {
            title: 'Price',
            dataIndex: 'price',
        },

        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },

        {
            title: 'Author',
            dataIndex: 'author',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex" }}>
                    <EditOutlined style={{ cursor: "pointer", color: "orange", marginRight: 18 }}
                        onClick={() => {

                        }}
                    />
                    <Popconfirm
                        title="Delete user"
                        description="Are you sure to delete this user?"
                        onConfirm={() => {

                        }}
                        okText="Yes"
                        cancelText="No"
                        placement='bottomLeft'
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </div>
            ),
        },
    ];


    return (
        <Table
            columns={columns}
            dataSource={bookData}
            rowKey={"_id"}
            pagination={
                {
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} on {total} rows</div>) }
                }} />
    )
}

export default BookTable;