import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(process.argv)
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:''
    })
    .option('l',{
        alias: 'limit',
        type: 'number',
        default:  10,
        describe:''
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe:''
    })
    .check((argv, options) => {

        if (argv.b < 1 ) throw 'Error: base must be a number'        
        return true
    })
    .parseSync()