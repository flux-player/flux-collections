import Column from "./column";

/**
 * Defines the structure of a collection
 */
export default class Structure {
    constructor(columns: Column[]) {
        if(!columns) return;

        // Add the columns to the existing collection
        columns.forEach(item => this._columns.push(item))
    }

    /**
     * The columns making up the collection structure
     */
    private _columns: Column[] = [
        new Column('id', 'string', true)
    ];

    get columns(): Column[] {
        return this._columns;
    }

    set columns(value: Column[]) {
        this._columns = value;
    }
}