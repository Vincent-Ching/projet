import dotenv from 'dotenv';
import cowsay from 'cowsay';

dotenv.config();

const message = `Bonjour, je m'appelle ${process.env.NAME} et je suis à ${process.env.CAMPUS}.`;

console.log(cowsay.say({ text: message }));