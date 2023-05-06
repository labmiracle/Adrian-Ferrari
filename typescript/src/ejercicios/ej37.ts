function pushToCollection<T>(item: T, collection: T[]): T[] {
    collection.push(item);

    return collection;
}

export default pushToCollection;
