function doStuff(value: any): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase().split("").join(" "));
    } else if (typeof value === "number") {
        console.log(value.toPrecision(5));
    }

    value;
}

doStuff(2);
doStuff(22);
doStuff(222);
doStuff("hello");
doStuff(true);
doStuff({});
