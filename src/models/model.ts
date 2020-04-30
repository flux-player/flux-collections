import { ColumnUniqueKey } from "../persistence/column";
import { randomString } from "@flux-player/utils";

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
    public get(key: string | number) : string | number | Object | Array<any> | undefined {
        if(!this.hasOwnProperty(key)) return;

        // TODO: Find a better way to do this
        let temp = this as any;

        return temp[key];
    }
}