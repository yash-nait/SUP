import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
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