# Simple-Boilerplate

## devDependencies

    "@babel/cli": "^7.11.6",
    "@babel/core": "^7.11.6",
    "@babel/preset-env": "^7.11.5",
    "@babel/preset-typescript": "^7.10.4",
    "@typescript-eslint/eslint-plugin": "^4.3.0",
    "@typescript-eslint/parser": "^4.3.0",
    "eslint": "^7.10.0",
    "eslint-config-prettier": "^6.12.0",
    "husky": "^4.3.0",
    "jest": "^26.4.2",
    "lint-staged": "^10.4.0",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.1.2",
    "typescript": "^4.0.3"

## scripts

    "build": "babel src --extensions .js,.ts,.tsx --out-dir dist",
    "lint": "eslint --ignore-path .gitignore --ext .js,.ts,.tsx .",
    "check-types": "tsc",
    "prettier": "prettier --ignore-path .gitignore --write \"**/*.+(js|json|ts|tsx)\"",
    "format": "npm run prettier -- --write",
    "check-format": "npm run prettier -- --list-different",
    "validate": "npm-run-all --parallel check-types check-format lint build",
    "test": "jest"
