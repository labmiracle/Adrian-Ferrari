import tamagochiCollection from "../tamagochiCollection";

test("tamagochiCollection", () => {
    const newCollection = new tamagochiCollection();
    newCollection.add("Tomate", "F", 135);
    newCollection.add("Sandia", "M", 220);
    const tomate = newCollection.find("Tomate");
    const sandia = newCollection.find("Sandia");
    expect(tomate.edad).toBe(135);
    expect(sandia.sexo).toBe("M");
    for (let i = 0; i < 5; i++) {
        tomate.beber();
    }
    expect(tomate.checkIsAlive()).toBe(false);
    newCollection.remove("Tomate");
    expect(() => newCollection.find("Tomate")).toThrow(/No hay tamagochis con ese nombre!/);
    sandia.comer(); //energia 75
    sandia.dormir(); //energia 100
    sandia.saltar(); //energia 75
    sandia.correr(); //energia 50
    sandia.correr(); //energia 25
    sandia.caminar(); //energia 15
    expect(sandia.checkIsAlive()).toBe(true);
    sandia.saltar();
    expect(sandia.checkIsAlive()).toBe(false);
});
