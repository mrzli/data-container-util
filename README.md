# Data Container Utilities

Some utilities for data containers such as `Map` and `Set`.

## Installation

```bash
npm install --save @gmjsdata-container-util
```

## API

### `Map`

#### `mapGetOrThrow`

Gets the value from a `Map` or throws an error if the key is not present.

```ts
const map = new Map<string, string>([['foo', 'bar']]);
const value: string = mapGetOrThrow(map, 'foo');
console.log(value);
// 'bar'
```

```ts
const map = new Map<string, string>([['foo', 'bar']]);
// the following line throws an error
const value: string = mapGetOrThrow(map, 'baz');
```
