import axios from 'axios';

// const apiPort = process.env.PORT || 3000;


const api = axios.create({
    baseURL: `https://sup-react.herokuapp.com/api`
});

export const insertComponent = payload => api.post("/component", payload);
export const getAllComponents = () => api.get("/components");
export const deleteComponentById = id => api.delete(`/component/${id}`);

const apis = {
    insertComponent,
    getAllComponents,
    deleteComponentById
}

export default apis;