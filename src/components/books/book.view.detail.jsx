import { Drawer } from "antd";

const BookDetail = (props) => {

    const { dataDetail, dataModalOpen, setDataModalOpen } = props;

    return (
        <Drawer title="Basic Drawer"
            width={"38vw"}
            style={{ fontSize: 17 }}
            onClose={() => {
                setDataModalOpen(false);
            }}
            open={dataModalOpen}>
            {dataDetail ?
                <>
                    <p><b>ID:</b> {dataDetail._id}</p>
                    <br />
                    <p><b>Title:</b> {dataDetail.mainText}</p>
                    <br />
                    <p><b>Author:</b> {dataDetail.author}</p>
                    <br />
                    <p><b>Genre:</b> {dataDetail.category}</p>
                    <br />
                    <p><b>Price:</b> {dataDetail.price.toLocaleString('vi-VN')} VND<b /></p>
                    <br />
                    <p><b>Quantity:</b> {dataDetail.quantity}</p>
                    <br />
                    <p><b>Sold:</b> {dataDetail.sold}</p>
                    <br />
                    <br />
                    <div style={{
                        display: "block",
                        height: "300px", width: "250px",
                        marginTop: 10, marginBottom: 15,
                        marginLeft: "auto", marginRight: "auto"
                    }}>
                        <img
                            style={{
                                height: "100%", width: "100%", objectFit: "contain%", borderRadius: 30
                            }}
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDetail.thumbnail}`
                            } alt="book image" />
                    </div>
                </> : null}
        </Drawer>
    )

}

export default BookDetail;