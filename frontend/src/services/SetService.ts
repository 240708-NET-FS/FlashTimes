import axios from "axios";
import server from "./server";
import { CreateSetDTO, SetDTO, UpdateSetDTO } from "types/types";


export const createNewSet = async (set: CreateSetDTO ): Promise<SetDTO> => {
    try{
        const response = await axios.post<SetDTO>(server + 'api/sets', set);
        return response.data;
    }catch(error){
        throw new Error('Creating Set Failed: ' + (error as any).response?.data?.message || 'Unknown error');
    }

}

export const updateSet = async(id: number, set:UpdateSetDTO): Promise<UpdateSetDTO> => {
    try{
        const response = await axios.put<UpdateSetDTO>(server + `api/sets/${id}`, set );
        return response.data;
    }catch(error){
        throw new Error('Updating Set Failed: ' + (error as any).response?.data?.message || 'Unknown error');
    }
}


export const getSets = async(): Promise<SetDTO[]> => {
    try{
        const response = await axios.get<SetDTO[]>(server + 'api/sets');
        return response.data;

    }catch(error){
        throw new Error('Getting sets failed: ' + (error as any).response?.data?.message || 'Unknown error');
    }

}

export const getSetById = async(id: number):Promise<SetDTO> =>{
    try{
        const response = await axios.get<SetDTO>(server + 'api/sets/' + id);
        return response.data;
    }catch(error){
        throw new Error('Getting set failed: ' + (error as any).response?.data?.message || 'Unknown error');

    }
}


export const deleteSet = async(id: number) => {
    try{
        const response = await axios.delete(server + 'api/sets/' + id);
        return response.data;

    }catch(error){
        throw new Error('Removing set failed: ' + (error as any).response?.data?.message || 'Uknown error');

    }

}