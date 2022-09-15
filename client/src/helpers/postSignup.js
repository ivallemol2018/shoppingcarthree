import axios from 'axios';


const postSignup =  async (register) => {

  const response = await axios.post('/api/signup',register);

  return response;
}

export default postSignup;