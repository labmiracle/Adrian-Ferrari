/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    collectCoverage: false,
    // A map from regular expressions to paths to transformers
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
