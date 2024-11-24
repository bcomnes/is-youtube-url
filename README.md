# @bret/is-youtube-url

[![latest version](https://img.shields.io/npm/v/@bret/is-youtube-url.svg)](https://www.npmjs.com/package/@bret/is-youtube-url)
[![Actions Status](https://github.com/bcomnes/is-youtube-url/workflows/tests/badge.svg)](https://github.com/bcomnes/is-youtube-url/actions)
[![Coverage Status](https://coveralls.io/repos/github/bcomnes/is-youtube-url/badge.svg?branch=master)](https://coveralls.io/github/bcomnes/is-youtube-url?branch=master)
[![downloads](https://img.shields.io/npm/dm/@bret/is-youtube-url.svg)](https://npmtrends.com/@bret/is-youtube-url)
![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=flat&labelColor=ff80ff)](https://github.com/neostandard/neostandard)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@bret/is-youtube-url)](https://socket.dev/npm/package/@bret/is-youtube-url)

Check if a given URL belongs to YouTube or Google Video domains.

## Installation

```bash
npm install @bret/is-youtube-url
```

## Usage

```javascript
import isYouTubeUrl from '@bret/is-youtube-url';

const url = new URL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
console.log(isYouTubeUrl(url)); // true

const invalidUrl = new URL('https://www.example.com');
console.log(isYouTubeUrl(invalidUrl)); // false
```

## API

### `isYouTubeUrl(parsedUrl)`

#### Parameters:
- `parsedUrl` (URL): A valid `URL` object that has already been validated.

#### Returns:
- `boolean`: `true` if the URL belongs to YouTube or Google Video domains, otherwise `false`.

### Supported Domains:
- `www.youtube.com`
- `youtube.com`
- `m.youtube.com`
- `youtu.be`
- `youtube-nocookie.com`
- `googlevideo.com`

## License

MIT
