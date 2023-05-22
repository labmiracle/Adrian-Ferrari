// setPrice(item: Object, price: Number) => item: Object
export type Item = {
    name: string;
    price: number;
};

export const setPrice = (item: Item, price: number): Item => {
    return { ...item, price: price };
};

// addToCart(cart: Array, item: Object) => cart: Array
export const addToCart = (cart: Item[], item: Item): Item[] => {
    return [...cart, item];
};
