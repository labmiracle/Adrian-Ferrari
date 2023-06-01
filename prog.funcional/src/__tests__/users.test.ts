import { roles, fullStacks, rolesArr, findUser } from "../ej-2";
import { users } from "../arreglos";

test("roles() devuelve un arreglo de strings: firstName-lastName: role", () => {
    expect(roles(users)).toEqual([
        { Bradley_Bouley: "Full Stack Resident" },
        { Chloe_Alnaji: "Full Stack Resident" },
        { Jonathan_Baughn: "Enterprise Instructor" },
        { Michael_Herman: "Lead Instructor" },
        { Robert_Hajek: "Full Stack Resident" },
        { Wes_Reid: "Instructor" },
        { Zach_Klabunde: "Instructor" },
    ]);
});
test("fullStacks() filtra aquellos usuarios con role de Full Stack Resident", () => {
    expect(fullStacks(users)).toEqual([
        { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
        { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
        { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    ]);
});
test("rolesArr()", () => {
    expect(rolesArr(users)).toEqual({
        "Full Stack Resident": [
            { firstName: "Bradley", lastName: "Bouley" },
            { firstName: "Chloe", lastName: "Alnaji" },
            { firstName: "Robert", lastName: "Hajek" },
        ],
        "Enterprise Instructor": [{ firstName: "Jonathan", lastName: "Baughn" }],
        "Lead Instructor": [{ firstName: "Michael", lastName: "Herman" }],
        Instructor: [
            { firstName: "Wes", lastName: "Reid" },
            { firstName: "Zach", lastName: "Klabunde" },
        ],
    });
});
test("findUser()", () => {
    expect(findUser(users, "Bradley")).toEqual({ firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" });
});
