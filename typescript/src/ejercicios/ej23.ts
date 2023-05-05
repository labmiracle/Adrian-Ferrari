function flatten<Type>(array: (Type | Type[])[]): Type[] {
    const flattened = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            element;
            flattened.push(...element);
        } else {
            element;
            flattened.push(element);
        }
    }

    return flattened;
}

export default flatten;
