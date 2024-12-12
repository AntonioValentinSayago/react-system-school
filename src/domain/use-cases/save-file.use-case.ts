import fs from 'fs'

export interface SaveFileUseCase {
    execute: ( options : Options ) => boolean;
}

export interface Options {
    fileContent  : string,
    destination? : 'outputs',
    fileName?    : 'table'
}

export class SaveFile implements SaveFileUseCase {

    constructor(){}

    execute({ fileContent, destination, fileName }: Options) : boolean {

        fs.mkdirSync(des, {recursive: true})

        fs.writeFileSync(`${destination}/tabla-${base}.txt`, outputMessage);
        console.log('File Created');
    }
}