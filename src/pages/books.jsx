import { useEffect, useState } from "react";
import BookTable from "../components/books/book.table"
import { fetchAllBookAPI } from "../services/api.services"

const BooksPage = () => {

    const [bookData, setBookData] = useState([]);

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadBook();
    }, [current, pageSize]);

    const loadBook = async () => {
        const res = await fetchAllBookAPI(current, pageSize);
        if (res.data) {
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
        setBookData(res.data.result);
    }

    return (
        <div>
            <BookTable
                bookData={bookData}
                setBookData={setBookData}
                current={current}
                pageSize={pageSize}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                total={total}
                setTotal={setTotal}
            />
        </div>

    )
}

export default BooksPage;