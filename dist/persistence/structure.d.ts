import Column from "./column";
/**
 * Defines the structure of a collection
 */
export default class Structure {
    constructor(columns: Column[]);
    /**
     * The columns making up the collection structure
     */
    private _columns;
    get columns(): Column[];
    set columns(value: Column[]);
}
