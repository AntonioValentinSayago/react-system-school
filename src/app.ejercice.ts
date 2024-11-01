import fs from 'fs'
import { yarg } from './plugins/args.plugin';

const {b:base, l:limit, s:showTable } = yarg

let outputMessage = ''
// const base = 5;
const headerMessage = `
---------------------
    Tabla ${base}
---------------------    
`;

for (let i = 0; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${ base * i }\n`
}
outputMessage = headerMessage + outputMessage;
if( showTable ) console.log(outputMessage);

//* guardar el proceso en una archivo de salida
const outputFilePath = `outputs`  //* Path del archivo

fs.mkdirSync(outputFilePath, {recursive: true})
fs.writeFileSync(`${outputFilePath}/tabla-${base}.txt`, outputMessage);
console.log('File Created');