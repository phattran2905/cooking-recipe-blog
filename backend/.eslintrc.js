module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"standard-with-typescript",
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		tsconfigRootDir: __dirname,
		// tsconfigRootDir: "./",
		project: ["./tsconfig.json"]
	},
	plugins: ["@typescript-eslint", "prettier"],
	root: true,
	rules: {
		"prettier/prettier": "error",
		"@typescript-eslint/restrict-template-expressions": "warn",
		"@typescript-eslint/no-floating-promises": "warn",

		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: false
			}
		]
	},
	ignorePatterns: [".eslintrc.js"]
}
