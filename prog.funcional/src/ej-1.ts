type genero = "male" | "female";

export type Personaje = {
    name: string;
    height: string;
    mass: string;
    eye_color: string;
    gender: genero;
};

//map
const nombres = (personajes: Personaje[]) => personajes.map(personaje => personaje.name);
const alturas = (personajes: Personaje[]) => personajes.map(personaje => personaje.height);
const nombresAlturas = (personajes: Personaje[]) => personajes.map(({ name, height }) => ({ name: name, height: height }));

//reduce
const masaTotal = (personajes: Personaje[]) => personajes.reduce((acc, curr) => acc + +curr.mass, 0);
const alturaTotal = (personajes: Personaje[]) => personajes.reduce((acc, curr) => acc + +curr.height, 0);
//numchars = name.lenght - espacios    {name:jose, ...} => {name:jose, numchars: 4}
const charsName = ({ name }: Personaje) => ({ name: name, numchars: [...name].reduce((acc, curr) => (curr === " " ? acc : acc + 1), 0) });
const charsNamesArr = (personajes: Personaje[]) => personajes.map(charsName);

type Colores = { [key: string]: number };
const init: Colores = {};
const coloresOjos = (personajes: Personaje[]): Colores =>
    personajes.reduce((colores, { eye_color }) => {
        colores[eye_color] = ++colores[eye_color] || 1;
        return colores;
    }, init);

//filter
const massOver100 = (personajes: Personaje[]) => personajes.filter(({ mass }) => +mass > 100);
const heightLess200 = (personajes: Personaje[]) => personajes.filter(({ height }) => +height < 200);
const males = (personajes: Personaje[]) => personajes.filter(({ gender }) => gender === "male");
const females = (personajes: Personaje[]) => personajes.filter(({ gender }) => gender === "female");

//sort
const sortByName = (personajes: Personaje[]) => personajes.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
const sortByMass = (personajes: Personaje[]) => personajes.sort((a, b) => (+a.mass < +b.mass ? 1 : +a.mass === +b.mass ? 0 : -1));
const sortByHeight = (personajes: Personaje[]) => personajes.sort((a, b) => (+a.height < +b.height ? 1 : +a.height === +b.height ? 0 : -1));
const sortByGender = (personajes: Personaje[]) => personajes.sort((a, b) => (a.gender === b.gender ? 0 : a.gender === "female" ? 1 : -1));

//every
const areAllEyesBlue = (personajes: Personaje[]) => personajes.every(({ eye_color }) => eye_color === "blue");
const areAllOver40Mass = (personajes: Personaje[]) => personajes.every(({ mass }) => +mass > 40);
const areAllShorterThan200 = (personajes: Personaje[]) => personajes.every(({ height }) => +height < 200);
const areAllMen = (personajes: Personaje[]) => personajes.every(({ gender }) => gender === "male");

//some
const someMan = (personajes: Personaje[]) => personajes.some(({ gender }) => gender === "male");
const someBlueEyes = (personajes: Personaje[]) => personajes.some(({ eye_color }) => eye_color === "blue");
const someHigherThan200 = (personajes: Personaje[]) => personajes.some(({ height }) => +height > 200);
const someMassLessThan50 = (personajes: Personaje[]) => personajes.some(({ mass }) => +mass < 50);

export {
    nombres,
    alturas,
    nombresAlturas,
    masaTotal,
    alturaTotal,
    charsNamesArr,
    coloresOjos,
    massOver100,
    heightLess200,
    males,
    females,
    sortByName,
    sortByMass,
    sortByHeight,
    sortByGender,
    areAllEyesBlue,
    areAllOver40Mass,
    areAllShorterThan200,
    areAllMen,
    someMan,
    someBlueEyes,
    someHigherThan200,
    someMassLessThan50,
};
