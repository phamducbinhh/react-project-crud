import axios from './Customize-Axios';
//get api User -> render Ui
const GetAllUsers = () => {
    return axios.get(`/api/users?page=2`);
};
export { GetAllUsers };
