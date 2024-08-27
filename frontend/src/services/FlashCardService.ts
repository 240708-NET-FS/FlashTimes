import axios from "axios";
import server from "./server";


import { FlashCard, FlashCardDTORequest } from "types/types";


export const addFlashCard = async (card: FlashCardDTORequest) => {
    try{
        const response = await axios.post(server + 'api/FlashCards', card);
        return response.data;

    }catch(error){
        throw new Error('Adding Flashcard failed: ' + (error as any).response?.data?.message || 'Unknown error');
    }
    
}