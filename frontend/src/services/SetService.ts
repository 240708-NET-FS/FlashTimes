import axios from "axios";
import server from "./server";
import { CreateSetDTO, SetDTO, UpdateSetDTO } from "types/types";


export const createNewSet = async (set: CreateSetDTO ): Promise<SetDTO> => {
    try{
        const response = await axios.post<SetDTO>(server + 'api/Sets', set);
        return response.data;
    }catch(error){
        throw new Error('Creating Set Failed: ' + (error as any).response?.data?.message || 'Unknown error');
    }

}

export const updateSet = async(id: number, set:UpdateSetDTO): Promise<UpdateSetDTO> => {
    try{
        const response = await axios.put<UpdateSetDTO>(server + `api/Sets/${id}`, set );
        return response.data;
    }catch(error){
        throw new Error('Updating Set Failed: ' + (error as any).response || 'Unknown error');
    }
}