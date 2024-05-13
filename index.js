const sharp = require('sharp');
const TextToSVG = require('text-to-svg');

class PixMix {
    constructor(sourceImagePath) {
        this.sourceImagePath = sourceImagePath;
        this.image = sharp(this.sourceImagePath);
        this.composites = [];
    }

    addText({ text, ttf, size, color, x, y, anchor = 'top left', letterSpacing = 0, lineHeight = 1.2 }) {
        const textToSVG = TextToSVG.loadSync(ttf);
        const svgOptions = {
            fontSize: size,
            anchor: anchor,
            attributes: { fill: color },
            letterSpacing: letterSpacing,
            kerning: true
        };

        const lines = text.split('\n');
        let yPosition = y;
        lines.forEach(line => {
            const svgText = textToSVG.getSVG(line, svgOptions);
            const composite = { input: Buffer.from(svgText), top: yPosition, left: x };
            this.composites.push(composite);
            yPosition += parseInt(size * lineHeight);
        });
    }

    async addImage({ image, top, left }) {
        const inputImage = await sharp(image).toBuffer();
        const composite = { input: inputImage, top: top, left: left };
        this.composites.push(composite);
    }

    async toFile(outputImagePath) {
        return this.image.composite(this.composites).toFile(outputImagePath);
    }

    async toBuffer() {
        return this.image.composite(this.composites).toBuffer();
    }
}

module.exports = PixMix;