module.exports = {
    "env": {
        "browser": true,
        "es6": true 
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "root": true,
    "parserOptions": {
			"ecmaVersion": 7,
			"sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true
        }
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "no-unused-vars": "off",
    }
};
