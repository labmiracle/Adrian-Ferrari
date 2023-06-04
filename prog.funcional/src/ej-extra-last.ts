type Operation = (num: number) => number;

function zero(operation?: Operation): number {
    if (operation) {
        return operation(0);
    } else {
        return 0;
    }
}

function one(operation?: Operation): number {
    if (operation) {
        return operation(1);
    } else {
        return 1;
    }
}

function two(operation?: Operation): number {
    if (operation) {
        return operation(2);
    } else {
        return 2;
    }
}

function three(operation?: Operation): number {
    if (operation) {
        return operation(3);
    } else {
        return 3;
    }
}

function four(operation?: Operation): number {
    if (operation) {
        return operation(4);
    } else {
        return 4;
    }
}

function five(operation?: Operation): number {
    if (operation) {
        return operation(5);
    } else {
        return 5;
    }
}

function six(operation?: Operation): number {
    if (operation) {
        return operation(6);
    } else {
        return 6;
    }
}

function seven(operation?: Operation): number {
    if (operation) {
        return operation(7);
    } else {
        return 7;
    }
}

function eight(operation?: Operation): number {
    if (operation) {
        return operation(8);
    } else {
        return 8;
    }
}

function nine(operation?: Operation): number {
    if (operation) {
        return operation(9);
    } else {
        return 9;
    }
}

function plus(num2: number): Operation {
    return (num1: number) => num1 + num2;
}

function minus(num2: number): Operation {
    return (num1: number) => num1 - num2;
}

function times(num2: number): Operation {
    return (num1: number) => num1 * num2;
}

function dividedBy(num2: number): Operation {
    if (num2 === 0) throw new Error("Cant divide by zero");
    return (num1: number) => Math.floor(num1 / num2);
}

export { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy };
