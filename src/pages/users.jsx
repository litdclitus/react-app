import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from '../services/api.services';
import { useEffect, useState } from 'react';

const UsersPage = () => {

    const [dataUser, setDataUser] = useState([]);

    //pagination
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);

    const [loadingTable, setLoadingTable] = useState(false);

    //empty array => run once
    //not empty => next value !== previous value
    useEffect(() => { //side effect
        loadUser();
    }, [current, pageSize]) // [] + condition

    const loadUser = async () => {
        setLoadingTable(true);
        const res = await fetchAllUserAPI(current, pageSize);
        if (res.data) {
            setDataUser(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
        setLoadingTable(false);
    }

    return (
        <div>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUser={dataUser}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                loadingTable={loadingTable}
            />

        </div>
    )
}

export default UsersPage;