type User = {
    login: string;
    firstName: string;
    lastName: string;
    likes: string[];
};

// Data
const users: User[] = [
    {
        login: "knuth",
        firstName: "Donald",
        lastName: "Knuth",
        likes: ["C", "Unix"],
    },
    {
        login: "norvig",
        firstName: "Peter",
        lastName: "Norvig",
        likes: ["AI", "Search", "NASA", "Mars"],
    },
    {
        login: "mfowler",
        firstName: "Martin",
        lastName: "Fowler",
        likes: ["Design Patterns", "Refactoring"],
    },
    {
        login: "kent",
        firstName: "Kent",
        lastName: "Beck",
        likes: ["TDD", "wikis", "Design Patterns"],
    },
];

// lookup()
export const lookup = (login: string, property: string) => {
    for (const user of users) {
        if (user.login === login) {
            return (
                user[property as keyof User] ??
                (() => {
                    throw new Error("Could not find property");
                })()
            );
        }
    }
    throw new Error("Could not find user");
};
