babel과 typescript를 동시에 사용할 경우 갖는 장점
https://iamturns.com/typescript-babel/

ms typescript-babel-starter
https://github.com/Microsoft/TypeScript-Babel-Starter

● Setting up Webpack and TypeScript

```js
$ npm init -y
$ npm install -D webpack webpack-cli typescript ts-loader
```

**types**

```js
npm install --save-dev 
@types/react 
@types/react-dom 
awesome-typescript-loader 
source-map-loader 
typescript

npm install --save-dev 
@babel/preset-typescript 
@babel/plugin-proposal-class-properties 
@babel/plugin-proposal-object-rest-spread
```

.babelrc
```js
{
	"presets": [
			"@babel/typescript"
	],
	"plugins": [
			"@babel/proposal-class-properties",
	]
}
```

Babel looks for .js files by default, and sadly this is not configurable within the Babel config file. If you use Webpack, add 'ts' to resolve.extensions array.

package.json - 타입 체킹
```js
"scripts": {
	"check-types": "tsc"
}
```

tsconfig.json
```js
{
	"compilerOptions": {
		// Target latest version of ECMAScript.
		"target": "esnext",
		// Search under node_modules for non-relative imports.
		"moduleResolution": "node",
		// Process & infer types from .js files.
		"allowJs": true,
		// Don't emit; allow Babel to transform files.
		"noEmit": true,
		// Enable strictest settings like strictNullChecks & noImplicitAny.
		"strict": true,
		// Disallow features that require cross-file information for emit.
		"isolatedModules": true,
		// Import non-ES modules as default imports.
		"esModuleInterop": true
	},
	"include": [
		"src"
	]
}
```