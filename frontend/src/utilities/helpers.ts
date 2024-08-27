import { SetDTO } from "types/types";



export const filterSetsById = (id: number, setList: SetDTO[]) => {
    console.log("filtering sets...");
    const filtered = setList.filter(s => s.author?.userId === id);
    console.log("filtered set");
    return filtered;

}