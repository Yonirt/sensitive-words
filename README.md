# sensitive-words
Project to playaround with publishing and maintaining tidy consumable packages to npm.

# Example

```shell
$ npm install sensitive-words --save
```

```javascript
const sensitiveWords = require('sensitive-words').default;

const filtered = sensitiveWords(
	'The new apple macbook pro will have a touchbar',
	['pro', 'touchbar']
);

console.log(filtered);
// The new apple macbook ***** will have a *****
```
