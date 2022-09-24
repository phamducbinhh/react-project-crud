import axios from './Customize-Axios';
//get api User -> render Ui
const GetAllUsers = (page) => {
    return axios.get(`/api/users?page=${page}`);
};

//post api User -> render Ui
const PostCreateUser = (name, job) => {
    return axios.post(`/api/users`, {
        name,
        job,
    });
};

//delete api user
const DeleteUser = (id) => {
    return axios.delete(`/api/users/${id}`);
};
export { GetAllUsers, PostCreateUser, DeleteUser };
