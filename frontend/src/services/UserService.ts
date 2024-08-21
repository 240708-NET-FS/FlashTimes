import axios from 'axios';

import { User } from '../types/types';

// function to register a user
export const registerUser = async (user: Partial<User>) => {
  const response = await axios.post('/api/users/register', user);
  return response.data;
};

// export const loginUser = async (credentials: {
//   username: string;
//   password: string;
// }) => {
//   const response = await axios.post('/api/users/login', credentials); // We're assuming there's a login endpoint
//   return response.data;
// };
