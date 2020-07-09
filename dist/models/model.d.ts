import { ColumnUniqueKey } from "../persistence/column";
export default abstract class BaseModel {
    id: ColumnUniqueKey;
    constructor();
    /**
     * Get the value of the specified key in the model
     *
     * @param key
     */
    get(key: string | number): string | number | Object | Array<any> | undefined;
}
