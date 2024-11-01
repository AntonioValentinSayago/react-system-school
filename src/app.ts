import { yarg } from "./plugins/args.plugin";

console.log(yarg);

(async() => {
    console.log('Funcion auto');
    await main();
})();


async function main(){
    console.log(yarg);
}