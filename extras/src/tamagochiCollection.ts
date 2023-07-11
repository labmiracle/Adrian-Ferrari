import { Tamagochi } from "./tamagochi";

export default class tamagochiCollection {
    private coleccion: Tamagochi[] = [];
    public add(nombre: string, sexo: "M" | "F", edad: number) {
        this.coleccion.push(new Tamagochi(nombre, sexo, edad));
    }
    public remove(nombre: string) {
        const index = this.coleccion.findIndex(tamagochi => tamagochi.nombre === nombre);
        if (index > -1) return this.coleccion.splice(index, 1);
        throw new Error("No hay tamagochis con ese nombre!");
    }
    public find(nombre: string) {
        const tamagochi = this.coleccion.find(tamagochi => tamagochi.nombre === nombre);
        if (tamagochi) return tamagochi;
        throw new Error("No hay tamagochis con ese nombre!");
    }
}
