import axios from './Customize-Axios';
//get api User -> render Ui
const GetAllUsers = (page) => {
    return axios.get(`/api/users?page=${page}`);
};
export { GetAllUsers };
