import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}

export class ServerApp{

    static run( {base, limit, showTable}: RunOptions){
        console.log('Server running...');

        //** Instanciamos el caso de uso  */
        const table = new CreateTable().execute({ base, limit});

        if( showTable ) console.log(table);
    }
}