import { useState } from 'react';
import { Table, Popconfirm, Drawer } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import BookDetail from './book.view.detail';
import CurrencyFormat from 'react-currency-format';

const BookTable = (props) => {

    const { bookData, setBookData, current, setCurrent,
        pageSize, setPageSize, total, setTotal } = props;

    const [dataModalOpen, setDataModalOpen] = useState(false);

    const [dataDetail, setDataDetail] = useState(null);

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
                    <a href="#"
                        onClick={() => {
                            setDataModalOpen(true);
                            setDataDetail(record);
                        }}>
                        {record._id}
                    </a>
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
            width: 150,
            render: (value, row, index) => {
                // do something like adding commas to the value or prefix
                return <span>{value.toLocaleString('vi-VN')} VND</span>;
            }

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
        <>
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
                        showTotal: (total, range) => {
                            return (<div> {range[0]}-{range[1]} on {total} rows</div>)
                        }
                    }}
            // onChange={handleChangePage}
            />
            <BookDetail
                dataModalOpen={dataModalOpen}
                setDataModalOpen={setDataModalOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
            />
        </>

    )
}

export default BookTable;