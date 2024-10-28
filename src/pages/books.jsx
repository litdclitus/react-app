import { useEffect, useState } from "react";
import BookTable from "../components/books/book.table"
import { fetchAllBookAPI } from "../services/api.services"
import BookForm from "../components/books/book.form";

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
            <BookForm
                loadBook={loadBook}
            />
            <BookTable
                bookData={bookData}
                current={current}
                pageSize={pageSize}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                total={total}
                loadBook={loadBook}
            />
        </div>

    )
}

export default BooksPage;