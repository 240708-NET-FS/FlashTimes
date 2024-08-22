import axios from 'axios';

import { UserRegistrationDTO, UserRegistrationResponseDTO } from '../types/types';

// function to register a user
export const registerUser = async (user: UserRegistrationDTO): Promise<UserRegistrationResponseDTO> => {
  try {
    const response = await axios.post<UserRegistrationResponseDTO>('/api/users/register', user);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed: ' + (error as any).response?.data?.message || 'Unknown error');
  }
};

// export const loginUser = async (credentials: {
//   username: string;
//   password: string;
// }) => {
//   const response = await axios.post('/api/users/login', credentials); // We're assuming there's a login endpoint
//   return response.data;
// };
