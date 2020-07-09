import Structure from "./structure";
export default abstract class Collection<T> {
    /**
     * Boolean value indicating whether the collection automagically persists
     */
    protected _autoPersist: boolean;
    /**
     * Where to store the collection
     */
    protected _storageDirectory: string;
    /**
     * There actual name of the file that will be written to disk
     */
    protected _filename: string;
    /**
     * Whether the collection has been loaded from the disk
     */
    private _isLoaded;
    /**
     * Collection constructor
     */
    protected constructor();
    /**
     * The data in the collection
     */
    private _data;
    get data(): T[];
    set data(value: T[]);
    /**
     * The name of the collection
     */
    protected _name: string;
    get name(): string;
    set name(value: string);
    /**
     * The structure of the collection (kinda like the schema in a database)
     */
    protected _structure: Structure;
    get structure(): Structure;
    set structure(value: Structure);
    /**
     * Initializes a collection. Set the concrete collection filename and validate if structure and name are defined
     */
    protected init(): void;
    /**
     * Sets the default configuration for the collection
     */
    private setDefaultConfiguration;
    /**
     * Push a data row to the collection
     *
     * @param row
     * @todo More explicit type annotations for things we're not too sure about
     */
    push(row: T | Array<T>): void;
    /**
     * Validates the row being inserted against the rules
     *
     * @param row The row being inserted
     * @param issues Colection of issues
     */
    private validate;
    /**
     * Validates any missing required columns in the input row
     *
     * @param row The row being inserted
     * @param issues Colection of issues
     */
    private validateMissing;
    /**
     * Run a query against the collection
     *
     * @param query
     */
    query(query: Object): void;
    /**
     * Loads up the collection from the disk
     *
     * @param exists
     */
    load(exists?: boolean): Promise<void>;
    /**
     * Initial persist of the collection
     */
    persist(): Promise<void>;
    /**
     * Get a blank object representing the schema of the collection
     */
    private getBlankSchemaObject;
}
