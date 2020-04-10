import { ColumnUniqueKey } from "../persistence/column";
import { randomString } from "@flux/utils";

export default abstract class BaseModel {
    public id: ColumnUniqueKey = "";

    constructor() {
        this.id = randomString(8);
    }

    /**
     * Get the value of the specified key in the model
     * 
     * @param key 
     */
    public get(key: string | number) : string | number | Object | undefined {
        if(!this.hasOwnProperty(key)) return;

        return // TODO: Implement method
    }
}