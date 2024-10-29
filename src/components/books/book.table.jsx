import { useState } from 'react';
import { Table, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import BookDetail from './book.view.detail';
import BookUpdate from './book.update.modal';

const BookTable = (props) => {

    const { bookData, current, setCurrent,
        pageSize, setPageSize, total, loadBook } = props;

    const [dataModalOpen, setDataModalOpen] = useState(false);

    const [dataDetail, setDataDetail] = useState(null);

    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataUpdateModal, setDataUpdateModal] = useState(false)

    const handleChangePage = (record) => {
        if (current && record.current) {
            if (current !== record.current) {
                setCurrent(record.current)
            }
        }
        if (pageSize && record.pageSize) {
            if (pageSize !== record.pageSize) {
                setPageSize(record.pageSize)
            }
        }
    }

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
                            setDataUpdate(record);
                            setDataUpdateModal(true);

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
                onChange={handleChangePage}
            />
            <BookDetail
                dataModalOpen={dataModalOpen}
                setDataModalOpen={setDataModalOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
            />
            <BookUpdate
                dataDetail={dataDetail}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                dataUpdateModal={dataUpdateModal}
                setDataUpdateModal={setDataUpdateModal}
                loadBook={loadBook}
            />
        </>

    )
}

export default BookTable;