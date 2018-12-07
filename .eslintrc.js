module.exports = {
    rules: {
        "linebreak-style": ["error", "windows"],
        "operator-linebreak": ["error", "after"],
        "object-curly-newline": ["error", { "multiline": true }],
    },
    extends: ["airbnb"],
    parser: "babel-eslint"
};
