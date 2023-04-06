import axios from 'axios';

export const getComments = async () => {
    const response = await axios.get('https://alifdes.github.io/comments-section/public/data.json');
    return response.data;
  };
  
