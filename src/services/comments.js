import axios from 'axios';

export const getComments = async () => {
    const response = await axios.get('data.json');
    return response.data;
  };
  
