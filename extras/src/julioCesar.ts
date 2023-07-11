export function julioCesar(message: string, espacios: number) {
    const abc = "abcdefghijklmnñopqrstuvwxyz".split("");
    let codedMessage = "";
    for (const c of message) {
        const shiftedIndex = abc.indexOf(c) + espacios;
        codedMessage += c === " " ? " " : abc[shiftedIndex % abc.length];
    }
    return codedMessage.split("").reverse().join("");
}

export function decodeJulioCesar(message: string, espacios: number) {
    const abc = "abcdefghijklmnñopqrstuvwxyz".split("");
    let codedMessage = "";
    for (const c of message) {
        const shiftedIndex = abc.indexOf(c) - espacios;
        codedMessage += c === " " ? " " : abc.at(shiftedIndex);
    }
    return codedMessage.split("").reverse().join("");
}

export function reverseJulioCesar(message: string, espacios: number) {
    const abc = "abcdefghijklmnñopqrstuvwxyz".split("");
    const reversedM = message.split("").reverse().join("");
    let codedMessage = "";
    for (const c of reversedM) {
        const shiftedIndex = abc.indexOf(c) + espacios;
        codedMessage += c === " " ? " " : abc[shiftedIndex % abc.length];
    }
    return codedMessage;
}

export function decodeReverseJulioCesar(message: string, espacios: number) {
    const abc = "abcdefghijklmnñopqrstuvwxyz".split("");
    const reversedM = message.split("").reverse().join("");
    let codedMessage = "";
    for (const c of reversedM) {
        const shiftedIndex = abc.indexOf(c) - espacios;
        codedMessage += c === " " ? " " : abc.at(shiftedIndex);
    }
    return codedMessage;
}
