# Try esbuild and Typescript

A sample repository to try out esbuild and npm publish.

## Building and publishing

    npm i
    npm run test
    npm run build
    npm login
    npm version <new_version>
    npm publish

## Installation

    npm i @adambirse123/try-esbuild-typescript

## Usage

```
const { sum } = require("@adambirse123/try-esbuild-typescript");

console.log(sum(1, 2));
console.log(sum(-1, 2, -10));
console.log(sum());
```

## Useful reference material

[Tutorial](https://janessagarrow.com/blog/typescript-and-esbuild/)

[Eslint setup](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)

[Package at NPM](https://www.npmjs.com/package/@adambirse123/try-esbuild-typescript)
