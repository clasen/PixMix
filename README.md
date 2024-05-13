# 🖼️ PixMix

A robust and intuitive image manipulation library for Node.js, designed to superimpose text and images onto a base image.

## 🚀 Installation

You can install the PixMix package using npm:

```bash
npm install pixmix
```

## 🛠️ Usage

To utilize PixMix, import the package, create an instance with a source image, and use methods to add text or other images, then save the result:

```javascript
const PixMix = require('pixmix');

const image = new PixMix('source.jpg');
await image.addImage({ image: 'overlay.png', top: 30, left: 50 });
image.addText({
    text: 'Sample Text Here',
    ttf: 'path/to/font.ttf',
    size: 24,
    color: 'white',
    x: 100,
    y: 150
});
await image.toFile('output.jpg');
```

* Check de demo: https://github.com/clasen/PixMix/blob/master/demo

## 📚 API

### `new PixMix(sourceImagePath)`
Creates a new instance of the PixMix class for image manipulation.
- **Parameters:**
  - `sourceImagePath` (string): Path to the source image file that will serve as the base for further editing.

### `addText(options)`
Adds text to the image using SVG format. The method adjusts the text's properties and positions it on the image according to the specified options.
- **Parameters:**
  - `options` (object): Configuration for adding text. The object includes:
    - `text` (string): The text content to add to the image.
    - `ttf` (string): Path to the TrueType font file (.ttf) used for rendering the text.
    - `size` (number): Font size for the text.
    - `color` (string): Color of the text, specified in any CSS color format (e.g., hex, rgba).
    - `x` (number): The x-coordinate (horizontal position) for the text's starting point on the image.
    - `y` (number): The y-coordinate (vertical position) for the text's starting point on the image.
    - `anchor` (string, optional): Text anchor position (e.g., 'top left', 'middle', 'bottom right'), defaults to 'top left'.
    - `letterSpacing` (number, optional): Space between the characters, defaults to 0.
    - `lineHeight` (number, optional): Line height expressed as a multiplier of the font size, defaults to 1.2.
- **Returns:** Adds a text overlay to the image composition queue.

### `addImage(options)`
Adds another image as a layer on top of the base image.
- **Parameters:**
  - `options` (object): Configuration for adding an overlay image. The object includes:
    - `image` (string): Path to the image file or a Buffer containing image data.
    - `top` (number): The top position (y-coordinate) where the overlay image will be placed on the base image.
    - `left` (number): The left position (x-coordinate) where the overlay image will be placed on the base image.
- **Returns:** Adds an image overlay to the image composition queue.

### `toFile(outputImagePath)`
Saves the composited image to a file.
- **Parameters:**
  - `outputImagePath` (string): The path where the final composited image will be saved.
- **Returns:** Asynchronously saves the composited image to a file. This method returns a Promise that resolves when the file has been written.

### `toBuffer()`
Generates a Buffer of the composited image, suitable for use when images need to be used directly in memory rather than saved to disk.
- **Returns:** Asynchronously returns a Buffer of the composited image. This method returns a Promise that resolves with the Buffer.

## 🤝 Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/clasen/PixMix).

## 📄 License

The MIT License (MIT)

Copyright (c) Martin Clasen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.