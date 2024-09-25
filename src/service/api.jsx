import axios from "axios";

const api = "https://66e5273a5cc7f9b6273c6ee9.mockapi.io/:endpoint"

const getProject = () => axios.get(`${api}/projects`)
const addProject = (projectData) => axios.post(`${api}/projects`, projectData)
const editProject = (id, projectData) => axios.put(`${api}/projects/${id}`, projectData)
const deleteProject = (id) => axios.delete(`${api}/projects/${id}`)


export { getProject, addProject, editProject, deleteProject }
