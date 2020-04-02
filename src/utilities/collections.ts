import Collection from "../persistence/collection";

export function getCollectionAsJSON (collection: Collection<any>): string  {
    let output = {
        name: collection.name,
        structure: [] as { key: string, required: boolean, type: string }[],
        data: [] as any[]
    };

    for (let column of collection.structure.columns) {
        output.structure.push({
            "key": column.key,
            "required": column.required,
            "type": column.type
        });
    }

    for (let row of collection.data) {
        output.data.push(row);
    }

    return JSON.stringify(output);
};
