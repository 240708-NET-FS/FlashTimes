import axios from "axios";
import server from "./server";


import { FlashCard, FlashCardDTORequest } from "types/types";


export const addFlashCard = async (card: FlashCardDTORequest) => {
    try{
        const response = await axios.post(server + 'FlashCards', card);
        return response.data;

    }catch(error){
        throw new Error('Adding Flashcard failed: ' + (error as any).response?.data?.message || 'Unknown error');
    }
    
}

export const updateFlashCard = async(id: number, card:FlashCardDTORequest) => {
    try{
        const response = await axios.put(server + 'api/FlashCards/' + id, card);
        return response.data;
    }catch(error){
        throw new Error('Updating Flashcard failed: ' + (error as any).response?.data?.message || 'Unknown error');
    }
}

export const deleteFlashCard = async(id: number) => {
    try{
        const response = await axios.delete(server + 'api/FlashCards/' + id);
        return response.data;

    }catch(error){
        throw new Error('Deleting flashcard failed: ' + (error as any).response?.data?.message || 'Unknown error');
    }
}