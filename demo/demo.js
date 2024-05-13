const PixMix = require('../index');

function time(minutesToSubtract = 0) {
    const currentTime = new Date();
    // Subtract the specified minutes from the current time
    currentTime.setMinutes(currentTime.getMinutes() - minutesToSubtract);
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    return formattedTime;
}


function formatDate(minutesToSubtract = 0) {
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() - minutesToSubtract);
    const day = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate();
    const month = (currentDate.getMonth() + 1) < 10 ? '0' + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1);
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

const xTime = time(1400) + ' • ' + formatDate(1400) + " from Earth";

const tweet = `It seems that Google wants us to
forget about the South Georgia case, 
eliminating the images at those coordinates 
54° 39' 44.62" S 36° 11' 42.47" W.
What do they want to hide?`;

main(); async function main() {
    const image = new PixMix('x.jpg');
    await image.addImage({ image: './avatar.png', left: 36, top: 319 });
    image.addText({ text: "PixMix", x: 193, y: 335, ttf: 'chirp-2/ChirpBold.ttf', size: 42, color: 'white'});
    image.addText({ text: "@pixmixsecret", x: 193, y: 385, ttf: 'chirp-2/ChirpRegular.ttf', size: 42, color: '#8d97a3'});
    image.addText({ text: tweet, x: 36, y: 525, ttf: 'chirp-2/ChirpRegular.ttf', size: 52, color: 'white', lineHeight: 1.35 });
    image.addText({ text: time(), x: 100, y: 58, ttf: 'chirp-2/ChirpBold.ttf', size: 50, color: 'white' });
    image.addText({ text: xTime, x: 36, y: 1567, ttf: 'chirp-2/ChirpRegular.ttf', size: 42, color: '#8d97a3' });

    image.toFile('y.jpg');

}