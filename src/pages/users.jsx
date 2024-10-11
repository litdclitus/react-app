import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from '../services/api.services';
import { useEffect, useState } from 'react';

const UsersPage = () => {

    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUser(res.data);
    }

    return (
        <div>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUser={dataUser} />
        </div>
    )
}

export default UsersPage;