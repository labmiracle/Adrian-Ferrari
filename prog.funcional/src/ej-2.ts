type role = "Full Stack Resident" | "Enterprise Instructor" | "Lead Instructor" | "Instructor";

export type user = {
    firstName: string;
    lastName: string;
    role: role;
};

const roles = (users: user[]) => users.map(user => ({ [user.firstName + "_" + user.lastName]: user.role }));
const fullStacks = (users: user[]) => users.filter(({ role }) => role === "Full Stack Resident");

type rolesArr = {
    [key: string]: Omit<user, "role">[];
};
const init: rolesArr = {};
const rolesArr = (users: user[]) =>
    users.reduce((obj, user) => {
        const newUser = { firstName: user.firstName, lastName: user.lastName } as Omit<user, "role">;
        if (obj[user.role]?.length > 0) {
            obj[user.role].push(newUser);
        } else obj[user.role] = [newUser];
        return obj;
    }, init);
const findUser = (users: user[], searchName: string) => users.find(({ firstName }) => firstName === searchName);

export { roles, fullStacks, rolesArr, findUser };
