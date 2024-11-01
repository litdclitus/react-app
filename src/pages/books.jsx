import { useEffect, useState } from "react";
import BookTable from "../components/books/book.table"
import { fetchAllBookAPI } from "../services/api.services"
import BookForm from "../components/books/book.form";

const BooksPage = () => {

    const [bookData, setBookData] = useState([]);

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);

    const [loadingTable, setLoadingTable] = useState(false);

    useEffect(() => {
        loadBook();
    }, [current, pageSize]);

    const loadBook = async () => {
        setLoadingTable(true);
        const res = await fetchAllBookAPI(current, pageSize);
        if (res.data) {
            setBookData(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
        setLoadingTable(false);
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
                loadingTable={loadingTable}
            />
        </div>

    )
}

export default BooksPage;