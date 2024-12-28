import fs from 'fs'
import { SaveFile } from './save-file.use-case'

describe('SaveFileUseCase', () => {
        
    afterEach(() => {
        const outputfolderExists = fs.existsSync('outputs')
        if(outputfolderExists) fs.rmSync('outputs', { recursive: true })
    })

    test('should save file with default values', () => {
        const saveFile = new SaveFile()
        const filePath = 'outputs/table.tsxt'
        const options = {
            fileContent: 'test-content'
        }
        const result = saveFile.execute( options )
        expect( result ).toBeTruthy();
        const fileExists = fs.existsSync( filePath );
        const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8'});

        expect( fileExists ).toBe( true)
        expect( fileContent ).toBe( options.fileContent )

    });

    test('shpuld save file with custom values', () => {
        
        const saveFile = new SaveFile();
        const options = {
            fileContent: 'custom content',
            fileDestionation: 'custom-ouputs/file-destination',
            fileName: 'custom-table-name'
        }

        const filePath = `${options.fileDestionation}/${options.fileName}.txt`;

        const result = saveFile.execute( options )
        const fileExists = fs.existsSync( filePath );
        const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8'});

        expect( result ).toBe( true)
        expect( fileExists ).toBe( true)
        expect( fileContent ).toBe( options.fileContent )

    })
});