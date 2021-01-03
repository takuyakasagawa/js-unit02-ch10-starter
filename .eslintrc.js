module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "root": true,
    "parserOptions": {
			"ecmaVersion": 6,
			"sourceType": "module",
        "ecmaFeatures": {
        "jsx": true
        }
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
};
