import axios from "./axios.customize";

const createUserAPI = (fullName, email, phone, password) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        phone: phone,
        password: password
    }
    return axios.post(URL_BACKEND, data);
}
const updateUserAPI = () => {

}

export { createUserAPI, updateUserAPI }