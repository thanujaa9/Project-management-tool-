import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_API_URL}/api/projects`; 

export const getProjects = async () => {
  const res = await axios.get(API_BASE_URL, { withCredentials: true });
  return res.data;
};

export const getProjectById = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/${id}`, { withCredentials: true });
  return res.data;
};

export const createProject = async (projectData, token) => {
  const res = await axios.post('/api/projects', projectData, {
    headers: {
      'x-auth-token': token,  
    },
  });
  return res.data;
};

export const deleteProject = async (id) => {
  const res = await axios.delete(`${API_BASE_URL}/${id}`, { withCredentials: true });
  return res.data;
};
