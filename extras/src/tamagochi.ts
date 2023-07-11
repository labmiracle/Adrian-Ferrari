export class Tamagochi {
    public nombre: string;
    readonly sexo: "M" | "F";
    readonly edad: number;
    private isAlive = true;
    constructor(n: string, s: "M" | "F", e: number) {
        this.nombre = n;
        this.sexo = s;
        this.edad = e;
    }
    private energia = 50;
    private sentidoDelHumor = 3;
    private overEatingCount = 0;
    private energiaHandler(accion: string) {
        if (accion === "comer" || accion === "dormir" || accion === "beber") {
            if (this.energia + 25 > 100) {
                this.energia = 100;
            } else {
                this.energia += 25;
            }
        }

        if (accion === "comer" || accion === "beber") {
            this.overEatingCount += 1;
            if (this.overEatingCount === 5) return (this.isAlive = false);
        } else {
            this.overEatingCount = 0;
        }

        if (accion === "saltar" || accion === "correr") {
            if (this.energia - 25 < 1) {
                return (this.isAlive = false);
            } else {
                this.energia -= 25;
            }
        }

        if (accion === "caminar") {
            if (this.energia - 10 < 1) {
                return (this.isAlive = false);
            } else {
                this.energia -= 10;
            }
        }
    }
    public checkIsAlive() {
        if (!this.isAlive) return false;
        return true;
    }

    public comer() {
        if (!this.checkIsAlive()) return;
        this.energiaHandler("comer");
    }
    public dormir() {
        if (!this.checkIsAlive()) return;
        this.energiaHandler("dormir");
    }
    public beber() {
        if (!this.checkIsAlive()) return;
        this.energiaHandler("beber");
    }
    public saltar() {
        if (!this.checkIsAlive()) return;
        this.energiaHandler("saltar");
    }
    public correr() {
        if (!this.checkIsAlive()) return;
        this.energiaHandler("correr");
    }
    public caminar() {
        if (!this.checkIsAlive()) return;
        this.energiaHandler("caminar");
    }
}
