# Random String Generator

[![npm version](https://img.shields.io/npm/v/random-string-generator.svg)](https://www.npmjs.com/package/random-string-generator-library)
[![license](https://img.shields.io/npm/l/random-string-generator.svg)](https://github.com/vigneshwarvj/random-string-generator-library-npm/blob/main/LICENSE)

The `random-string-generator-library` is a lightweight utility library for generating random strings in Node.js or browser environments. It provides a simple function for creating strings with a specified length, using a customizable character set.

## Installation

Install the library using npm:

```bash
npm install random-string-generator-library
```

## Usage
The `randomStringGenerator` function exports a single method that can be used to generate random strings.
```javascript
const { generateRandomString } = require('random-string-generator');

// Generate a random string of length 10
const randomString = generateRandomString(10);
console.log(randomString);
```

## API
`generateRandomString(length: number): string`

Generates a random string of the specified length using a default character set of uppercase letters, lowercase letters, and digits.

- Parameters:
    - `length`: The length of the generated random string.
- Returns:
    - A randomly generated string.

## Examples:
```javascript
const { generateRandomString } = require('random-string-generator');

// Generate a random string of length 8
const randomString1 = generateRandomString(8);
console.log(randomString1);  // Output: "Yh8d3g9n"

// Generate another random string of length 5
const randomString2 = generateRandomString(5);
console.log(randomString2);  // Output: "Ap1i9"
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/vigneshwarvj/random-string-generator-library-npm#readme) file for details.

## Contributing

Feel free to contribute, report issues, or suggest improvements. Contributions are welcome!

## Contact

For any inquiries or collaboration opportunities, feel free to reach out:

- **LinkedIn:ℹ️** [Vigneshwar Vijayakumar (VV)](https://in.linkedin.com/in/vigneshwar-vijayakumar-58583724b)
- **Email:📧** [Mail me](mailto:vigneshwarjosephite@gmail.com)