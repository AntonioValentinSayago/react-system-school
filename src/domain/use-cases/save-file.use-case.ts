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
        try {
            fs.mkdirSync(destination, {recursive: true})

            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            console.log('File Created');      
        } catch (error) {
            console.log(error);
            return false
        }
    }
}