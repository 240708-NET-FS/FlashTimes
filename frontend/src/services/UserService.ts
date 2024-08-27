import axios from 'axios';

import { User, UserRegistrationDTO, UserRegistrationResponseDTO, UserResponseDTO } from '../types/types';
import server from './server';

// Register a user
export const registerUser = async (user: UserRegistrationDTO): Promise<UserRegistrationResponseDTO> => {
  try {
    const response = await axios.post<UserRegistrationResponseDTO>(server + 'api/Users/register', user);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed: ' + (error as any).response?.data?.message || 'Unknown error');
  }
};

// Login a user
export const loginUser = async (credentials: { userName: string; password: string }): Promise<UserResponseDTO> => {
  try {
    const response = await axios.post<UserResponseDTO>(server + 'api/Auth/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Login failed: ' + (error as any).response?.data?.message || 'Unknown error');
  }
};


export const logout = async() => {
  try{
    const response = await axios.post(server + 'api/Auth/logout');
    return response.data;
  }catch(error){
    throw new Error('Logout failed: ' + (error as any).response?.data?.message || 'Unknown error');
  }
}


export const getUserEntity = async(id: number)=>{
  try{
    const response = await axios.get<User>(server + 'api/Users/' + id);
    return response.data;
  }catch(error){
    throw new Error('Getting user failed: ' + (error as any).response?.data?.message || "Unknown error");
  }
}